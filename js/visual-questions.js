/* ============================================================
   花圃數學園 — Visual Questions Module  v2
   js/visual-questions.js

   Flow:
     1. Question text rendered with [noun:count] as clickable chips
     2. Click a chip (✏️) → drawing popup opens
     3. Finish drawing → chip becomes a stamp button (🖐)
        – Each click places ONE object at the noun's zone grid position
        – Chip shows remaining count; disables at 0
     4. Once ALL chip counts exhausted → operation mode auto-activates
     5a. ADD   → centre drop-zone appears; drag objects in → counter++,
                 object shrinks & locks in zone (no more drag)
     5b. SUB-1 → single noun; centre subtract-box appears;
                 drag in → object disappears, counter--
     5c. SUB-2 → two nouns; centre double-slot appears;
                 drop noun-A into slot-A then noun-B into slot-B (any order)
                 → both disappear, counter--
                 counter starts at max(countA, countB)
     6. Student reads answer from counter, clicks 確認答案
   ============================================================ */

const VisualQuestions = (() => {

  /* ── State ─────────────────────────────────────────────── */
  let vqQ        = null;
  let tokenMap   = {};   // tokenId → { noun, totalCount, remaining }
  let drawnImages = {};  // noun   → imageData string
  let uniqueNouns = [];  // ordered, first-appearance
  let objects    = [];   // { id, tokenId, noun, el, inContainer }
  let opMode     = null; // 'add' | 'sub1' | 'sub2'
  let addCount   = 0;
  let subCount   = 0;
  let slotState  = { a: null, b: null }; // sub2 slot objIds
  let nextId     = 0;

  // Drawing popup state
  let drawFor    = null;
  let drawCtx    = null;
  let isDrawing  = false;
  let lastX = 0, lastY = 0;
  let drawTool   = 'pen';

  let onAnswerCb = null;

  /* ── Public API ─────────────────────────────────────────── */
  function setAnswerCallback(cb) { onAnswerCb = cb; }

  function init() {
    _bindDrawEvents();
    _bindSubmitEvent();
  }

  /* ── Public: show a visual question ─────────────────────── */
  function show(question) {
    vqQ        = question;
    objects    = [];
    opMode     = null;
    addCount   = 0;
    subCount   = 0;
    slotState  = { a: null, b: null };
    nextId     = 0;

    const tokens = _parseTokens(question.q);
    _buildTokenMap(tokens);
    _renderQuestion(tokens);
    _clearCanvas();
    _setupZoneVisuals();

    // Reset all operation UI
    _el('vq-answer-row').classList.add('hidden');
    _el('vq-drop-zone').classList.add('hidden');
    _el('vq-sub-single').classList.add('hidden');
    _el('vq-sub-double').classList.add('hidden');
    _el('vq-drop-count').textContent = '0';
    _el('vq-sub-count').textContent = '0';
    _el('vq-sub-count-2').textContent = '0';
    _el('vq-canvas-count').textContent = '0';
    _el('vq-main-canvas').classList.remove('op-active', 'two-zones');
    _el('vq-zone-label-a').classList.add('hidden');
    _el('vq-zone-label-b').classList.add('hidden');

    // Clear slot highlights
    _el('vq-sub-slot-a').classList.remove('filled');
    _el('vq-sub-slot-b').classList.remove('filled');

    _updateHint();
  }

  /* ── Parse [noun:count] tokens ──────────────────────────── */
  function _parseTokens(text) {
    const parts = [];
    const re = /\[([^\]:]+):(\d+)\]/g;
    let last = 0, m;
    while ((m = re.exec(text)) !== null) {
      if (m.index > last) parts.push({ type: 'text', text: text.slice(last, m.index) });
      parts.push({ type: 'noun', noun: m[1], count: parseInt(m[2]) });
      last = m.index + m[0].length;
    }
    if (last < text.length) parts.push({ type: 'text', text: text.slice(last) });
    return parts;
  }

  /* ── Build per-token map ─────────────────────────────────── */
  function _buildTokenMap(tokens) {
    tokenMap    = {};
    drawnImages = {};
    uniqueNouns = [];
    const nounIdx = {};

    tokens.filter(t => t.type === 'noun').forEach(t => {
      if (nounIdx[t.noun] === undefined) nounIdx[t.noun] = 0;
      const tokenId = `${t.noun}-${nounIdx[t.noun]++}`;
      tokenMap[tokenId] = { noun: t.noun, totalCount: t.count, remaining: t.count, tokenId };

      if (!uniqueNouns.includes(t.noun)) {
        uniqueNouns.push(t.noun);
        drawnImages[t.noun] = null;
      }
    });
  }

  /* ── Render question text with noun chips ───────────────── */
  function _renderQuestion(tokens) {
    const el = _el('vq-question-text');
    el.innerHTML = '';
    const nounOcc = {};

    tokens.forEach(t => {
      if (t.type === 'text') {
        const s = document.createElement('span');
        s.innerHTML = _ruby(t.text);
        el.appendChild(s);
      } else {
        if (nounOcc[t.noun] === undefined) nounOcc[t.noun] = 0;
        const tokenId = `${t.noun}-${nounOcc[t.noun]++}`;
        const token   = tokenMap[tokenId];
        const drawn   = !!drawnImages[t.noun];
        const btn     = document.createElement('button');
        const nounHtml = _ruby(t.noun);

        if (!drawn) {
          // Not yet drawn – show draw button
          btn.className = 'vq-noun-chip';
          btn.innerHTML = `<span class="chip-icon">✏️</span>${nounHtml}<span class="chip-count">×${t.count}</span>`;
          btn.addEventListener('click', () => _openDraw(t.noun));
        } else if (token.remaining > 0) {
          // Drawn, still has stamps left
          btn.className = 'vq-noun-chip drawn';
          btn.innerHTML = `<span class="chip-icon">🖐️</span>${nounHtml}<span class="chip-remaining">${token.remaining}</span>`;
          btn.addEventListener('click', () => _stampObject(tokenId));
        } else {
          // Exhausted
          btn.className = 'vq-noun-chip drawn exhausted';
          btn.disabled  = true;
          btn.innerHTML = `<span class="chip-icon">✅</span>${nounHtml}<span class="chip-remaining zero">0</span>`;
        }

        btn.dataset.tokenId = tokenId;
        el.appendChild(btn);
      }
    });
  }

  /* ── Setup zone labels & divider ────────────────────────── */
  function _setupZoneVisuals() {
    if (uniqueNouns.length >= 2) {
      const la = _el('vq-zone-label-a');
      const lb = _el('vq-zone-label-b');
      la.innerHTML = _ruby(uniqueNouns[0]);
      lb.innerHTML = _ruby(uniqueNouns[1]);
      // labels shown after first noun is drawn
    }
  }

  /* ── Open drawing popup ─────────────────────────────────── */
  function _openDraw(noun) {
    drawFor = noun;
    _el('vq-draw-popup').classList.remove('hidden');
    _el('vq-draw-noun-label').innerHTML = _ruby(noun);

    const canvas = _el('vq-draw-canvas');
    const size   = Math.min(canvas.parentElement.offsetWidth - 36, 280);
    canvas.width  = size;
    canvas.height = size;
    drawCtx = canvas.getContext('2d');
    drawCtx.fillStyle = '#ffffff';
    drawCtx.fillRect(0, 0, size, size);

    drawTool  = 'pen';
    isDrawing = false;
    _el('vq-draw-pen').classList.add('active');
    _el('vq-draw-eraser').classList.remove('active');
  }

  function _closeDraw() {
    _el('vq-draw-popup').classList.add('hidden');
    drawFor   = null;
    isDrawing = false;
  }

  function _finishDraw() {
    if (!drawFor) return;
    drawnImages[drawFor] = _el('vq-draw-canvas').toDataURL('image/png');

    // Share image to all tokens of this noun
    Object.values(tokenMap).filter(t => t.noun === drawFor).forEach(t => {
      // imageData is in drawnImages[noun], no need to copy
    });

    _closeDraw();
    _renderQuestion(_parseTokens(vqQ.q));

    // Show zone labels once a noun is drawn for 2-noun questions
    if (uniqueNouns.length >= 2) {
      _el('vq-zone-label-a').classList.remove('hidden');
      _el('vq-zone-label-b').classList.remove('hidden');
      _el('vq-main-canvas').classList.add('two-zones');
    }

    _updateHint();
  }

  /* ── Stamp one object onto canvas ───────────────────────── */
  function _stampObject(tokenId) {
    const token = tokenMap[tokenId];
    if (!token || token.remaining <= 0) return;

    const pos = _getNextPos(token.noun);
    _addObject(tokenId, token.noun, pos.x, pos.y);

    token.remaining--;
    _renderQuestion(_parseTokens(vqQ.q));
    _syncCount();
    _updateHint();
    _checkAllPlaced();
  }

  /* ── Compute next grid position for noun's zone ─────────── */
  function _getNextPos(noun) {
    const canvas = _el('vq-main-canvas');
    const cw  = canvas.offsetWidth  || 320;
    const ch  = canvas.offsetHeight || 200;
    const OBJ = 54, PAD = 10, LABEL_H = 26;

    let zoneX, zoneW;
    const n = uniqueNouns.length;
    if (n <= 1) {
      zoneX = PAD;
      zoneW = cw - PAD * 2;
    } else {
      const nounIdx = uniqueNouns.indexOf(noun);
      const halfW   = (cw - PAD * 3) / 2;
      zoneX = PAD + nounIdx * (halfW + PAD);
      zoneW = halfW;
    }

    const existing = objects.filter(o => o.noun === noun).length;
    const COLS = Math.max(1, Math.floor(zoneW / (OBJ + 4)));
    const col  = existing % COLS;
    const row  = Math.floor(existing / COLS);

    return {
      x: zoneX + col * (OBJ + 4) + 2,
      y: PAD + LABEL_H + row * (OBJ + 4)
    };
  }

  /* ── Create draggable object element ────────────────────── */
  function _addObject(tokenId, noun, x, y) {
    const canvas = _el('vq-main-canvas');
    const id = nextId++;
    const el = document.createElement('div');
    el.className = 'vq-object';
    el.style.left = x + 'px';
    el.style.top  = y + 'px';
    el.dataset.id      = id;
    el.dataset.noun    = noun;
    el.dataset.tokenId = tokenId;
    el.inContainer     = false;

    const img = document.createElement('img');
    img.src = drawnImages[noun];
    img.alt = noun;
    img.draggable = false;
    el.appendChild(img);

    canvas.appendChild(el);
    objects.push({ id, tokenId, noun, el, inContainer: false });
    _attachDrag(el);
    return el;
  }

  /* ── Drag handling (pointer events) ─────────────────────── */
  function _attachDrag(el) {
    let active = false, sx, sy, sl, st;

    el.addEventListener('pointerdown', e => {
      if (el.inContainer) return;
      e.preventDefault();
      el.setPointerCapture(e.pointerId);
      active = true;
      sx = e.clientX; sy = e.clientY;
      sl = parseInt(el.style.left) || 0;
      st = parseInt(el.style.top)  || 0;
      el.style.zIndex = '99';
    });

    el.addEventListener('pointermove', e => {
      if (!active) return;
      e.preventDefault();
      el.style.left = (sl + e.clientX - sx) + 'px';
      el.style.top  = (st + e.clientY - sy) + 'px';
      _highlightTargets(el);
    });

    el.addEventListener('pointerup', () => {
      if (!active) return;
      active = false;
      el.style.zIndex = '';
      _clearHighlights();
      _handleDrop(el);
    });

    el.addEventListener('pointercancel', () => {
      active = false;
      el.style.zIndex = '';
      _clearHighlights();
    });
  }

  function _highlightTargets(el) {
    const er = el.getBoundingClientRect();
    if (opMode === 'add') {
      _el('vq-drop-zone').classList.toggle(
        'drag-over', _overlaps(er, _el('vq-drop-zone').getBoundingClientRect())
      );
    }
    if (opMode === 'sub1') {
      _el('vq-sub-single').classList.toggle(
        'drag-over', _overlaps(er, _el('vq-sub-single').getBoundingClientRect())
      );
    }
    if (opMode === 'sub2') {
      _el('vq-sub-double').classList.toggle(
        'drag-over', _overlaps(er, _el('vq-sub-double').getBoundingClientRect())
      );
    }
  }

  function _clearHighlights() {
    ['vq-drop-zone','vq-sub-single','vq-sub-double']
      .forEach(id => _el(id).classList.remove('drag-over'));
  }

  /* ── Drop handling ──────────────────────────────────────── */
  function _handleDrop(el) {
    const er    = el.getBoundingClientRect();
    const objId = parseInt(el.dataset.id);

    // Pre-op phase: no drop zones active yet
    if (!opMode) {
      _syncCount();
      return;
    }

    // ADD mode
    if (opMode === 'add') {
      if (_overlaps(er, _el('vq-drop-zone').getBoundingClientRect())) {
        _lockInAddZone(el, objId);
      }
      _syncCount();
      return;
    }

    // SUB-1 mode
    if (opMode === 'sub1') {
      if (_overlaps(er, _el('vq-sub-single').getBoundingClientRect())) {
        _removeObj(objId);
        subCount--;
        _el('vq-sub-count').textContent = subCount;
        _showAnswerVal(subCount);
      }
      _syncCount();
      return;
    }

    // SUB-2 mode
    if (opMode === 'sub2') {
      if (_overlaps(er, _el('vq-sub-double').getBoundingClientRect())) {
        _handleSub2Drop(el, objId);
      }
      _syncCount();
      return;
    }
  }

  /* ── Lock object in add zone (shrink + freeze) ───────────── */
  function _lockInAddZone(el, objId) {
    const obj = objects.find(o => o.id === objId);
    if (!obj || obj.inContainer) return;
    obj.inContainer = true;
    el.inContainer  = true;

    const drop   = _el('vq-drop-zone');
    const dr     = drop.getBoundingClientRect();
    const cr     = _el('vq-main-canvas').getBoundingClientRect();

    const MINI    = 26;
    const MARGIN  = 6;
    const TOP_PAD = 38; // reserve top area for counter number
    const zoneW   = dr.width  || 140;
    const zoneH   = dr.height || 110;
    const maxX    = Math.max(zoneW - MINI - MARGIN * 2, 1);
    const maxY    = Math.max(zoneH - MINI - TOP_PAD - MARGIN, 1);

    // Random pile position within drop zone, below counter display
    const tx = dr.left - cr.left + MARGIN + Math.random() * maxX;
    const ty = dr.top  - cr.top  + TOP_PAD + Math.random() * maxY;

    el.style.transition = 'left .18s ease, top .18s ease, width .18s ease, height .18s ease, opacity .18s';
    el.style.left    = tx + 'px';
    el.style.top     = ty + 'px';
    el.style.width   = MINI + 'px';
    el.style.height  = MINI + 'px';
    el.style.opacity = '0.8';
    el.style.pointerEvents = 'none';
    el.style.zIndex  = '5';
    setTimeout(() => { el.style.transition = ''; }, 220);

    addCount++;
    _el('vq-drop-count').textContent = addCount;
    _showAnswerVal(addCount);
  }

  /* ── Sub-2: double-slot drop ─────────────────────────────── */
  function _handleSub2Drop(el, objId) {
    const noun    = el.dataset.noun;
    const slotKey = noun === uniqueNouns[0] ? 'a' : 'b';

    // Slot already occupied → ignore
    if (slotState[slotKey] !== null) return;

    slotState[slotKey] = objId;

    // Snap object into its slot visually
    const slotEl = _el(`vq-sub-slot-${slotKey}`);
    const sr     = slotEl.getBoundingClientRect();
    const cr     = _el('vq-main-canvas').getBoundingClientRect();

    el.style.transition = 'left .15s ease, top .15s ease, width .15s ease, height .15s ease';
    el.style.left   = (sr.left - cr.left + 6) + 'px';
    el.style.top    = (sr.top  - cr.top  + 6) + 'px';
    el.style.width  = '38px';
    el.style.height = '38px';
    el.style.pointerEvents = 'none';
    el.style.zIndex = '10';
    setTimeout(() => { el.style.transition = ''; }, 200);

    slotEl.classList.add('filled');

    // Both slots filled → resolve pair
    if (slotState.a !== null && slotState.b !== null) {
      setTimeout(() => {
        _removeObj(slotState.a);
        _removeObj(slotState.b);
        slotState = { a: null, b: null };

        _el('vq-sub-slot-a').classList.remove('filled');
        _el('vq-sub-slot-b').classList.remove('filled');

        subCount--;
        _el('vq-sub-count-2').textContent = subCount;
        _showAnswerVal(subCount);
        _syncCount();
      }, 320);
    }
  }

  /* ── Remove object by id ─────────────────────────────────── */
  function _removeObj(id) {
    const i = objects.findIndex(o => o.id === id);
    if (i === -1) return;
    objects[i].el.remove();
    objects.splice(i, 1);
  }

  function _syncCount() {
    const free = objects.filter(o => !o.inContainer).length;
    _el('vq-canvas-count').textContent = objects.length;
    // In sub1, answer is already tracked by subCount
  }

  function _clearCanvas() {
    _el('vq-main-canvas').querySelectorAll('.vq-object').forEach(e => e.remove());
    objects = [];
    _el('vq-canvas-count').textContent = '0';
  }

  /* ── Check if all chips exhausted → activate op mode ──────── */
  function _checkAllPlaced() {
    const allDrawn    = uniqueNouns.every(n => drawnImages[n]);
    const allExhausted = Object.values(tokenMap).every(t => t.remaining === 0);
    if (!allDrawn || !allExhausted) return;
    _activateOpMode();
  }

  /* ── Activate operation mode ─────────────────────────────── */
  function _activateOpMode() {
    const op = vqQ.operation;
    _el('vq-main-canvas').classList.add('op-active');
    _el('vq-answer-row').classList.remove('hidden');

    if (op === 'add') {
      opMode   = 'add';
      addCount = 0;
      _el('vq-drop-count').textContent = '0';
      _el('vq-drop-zone').classList.remove('hidden');
      _showAnswerVal(0);

    } else if (op === 'subtract' && uniqueNouns.length <= 1) {
      opMode   = 'sub1';
      subCount = objects.length;
      _el('vq-sub-count').textContent = subCount;
      _el('vq-sub-single').classList.remove('hidden');
      _showAnswerVal(subCount);

    } else if (op === 'subtract' && uniqueNouns.length >= 2) {
      opMode  = 'sub2';
      const cA = objects.filter(o => o.noun === uniqueNouns[0]).length;
      const cB = objects.filter(o => o.noun === uniqueNouns[1]).length;
      subCount = Math.max(cA, cB);
      _el('vq-sub-count-2').textContent = subCount;
      // Label slots
      _el('vq-slot-a-noun').innerHTML = _ruby(uniqueNouns[0]);
      _el('vq-slot-b-noun').innerHTML = _ruby(uniqueNouns[1]);
      _el('vq-sub-double').classList.remove('hidden');
      _showAnswerVal(subCount);
    }

    _updateHint();
  }

  function _showAnswerVal(n) {
    _el('vq-answer-display').textContent = n;
  }

  /* ── Submit answer ───────────────────────────────────────── */
  function _submitAnswer() {
    if (!vqQ || !opMode || !onAnswerCb) return;
    let current;
    if (opMode === 'add')       current = addCount;
    else if (opMode === 'sub1') current = subCount;
    else                        current = subCount;

    onAnswerCb(String(current) === String(vqQ.answer), vqQ.answer);
  }

  /* ── Hint text ───────────────────────────────────────────── */
  function _updateHint() {
    const el = _el('vq-hint');
    if (!el) return;

    // Phase 1: need to draw nouns
    const undrawn = uniqueNouns.filter(n => !drawnImages[n]);
    if (undrawn.length > 0) {
      el.textContent = `點橘色名詞繪圖（還有 ${undrawn.length} 個需要畫）`;
      el.className = 'vq-hint';
      return;
    }

    // Phase 2: need to stamp all objects
    const pending = Object.values(tokenMap).reduce((s, t) => s + t.remaining, 0);
    if (pending > 0) {
      el.textContent = `點綠色名詞把物件放到畫布上（還有 ${pending} 個）`;
      el.className = 'vq-hint';
      return;
    }

    // Phase 3: op mode
    if (!opMode) return;
    if (opMode === 'add') {
      el.innerHTML = '⬆️ 把所有物件<b>拖入藍色計算框</b>，再確認答案';
    } else if (opMode === 'sub1') {
      el.innerHTML = '⬆️ 根據題目，把要<b>移除的物件拖入紅框</b>，再確認答案';
    } else {
      el.innerHTML = '⬆️ 把兩種物件各放一個進對應的框，兩框都填滿才會消失';
    }
    el.className = 'vq-hint ready';
  }

  /* ── Utility ─────────────────────────────────────────────── */
  function _ruby(text) {
    return (typeof toRuby === 'function') ? toRuby(text) : text;
  }

  function _el(id) { return document.getElementById(id); }

  function _overlaps(a, b) {
    return !(a.right < b.left || a.left > b.right ||
             a.bottom < b.top || a.top > b.bottom);
  }

  /* ── Draw canvas event bindings ─────────────────────────── */
  function _bindDrawEvents() {
    const canvas = _el('vq-draw-canvas');

    function getPos(e) {
      const r = canvas.getBoundingClientRect();
      return {
        x: (e.clientX - r.left) * (canvas.width  / (r.width  || 1)),
        y: (e.clientY - r.top)  * (canvas.height / (r.height || 1))
      };
    }

    canvas.addEventListener('pointerdown', e => {
      if (!drawCtx) return;
      e.preventDefault();
      canvas.setPointerCapture(e.pointerId);
      isDrawing = true;
      const p = getPos(e);
      lastX = p.x; lastY = p.y;
      drawCtx.beginPath();
      drawCtx.arc(p.x, p.y, drawTool === 'pen' ? 4 : 14, 0, Math.PI * 2);
      drawCtx.fillStyle = drawTool === 'pen' ? '#1a1a2e' : '#ffffff';
      drawCtx.fill();
    });

    canvas.addEventListener('pointermove', e => {
      if (!isDrawing || !drawCtx) return;
      e.preventDefault();
      const p = getPos(e);
      drawCtx.beginPath();
      drawCtx.moveTo(lastX, lastY);
      drawCtx.lineTo(p.x, p.y);
      drawCtx.strokeStyle = drawTool === 'pen' ? '#1a1a2e' : '#ffffff';
      drawCtx.lineWidth   = drawTool === 'pen' ? 5 : 28;
      drawCtx.lineCap = drawCtx.lineJoin = 'round';
      drawCtx.stroke();
      lastX = p.x; lastY = p.y;
    });

    canvas.addEventListener('pointerup',     () => { isDrawing = false; });
    canvas.addEventListener('pointerleave',  () => { isDrawing = false; });
    canvas.addEventListener('pointercancel', () => { isDrawing = false; });

    _el('vq-draw-pen').addEventListener('click', () => {
      drawTool = 'pen';
      _el('vq-draw-pen').classList.add('active');
      _el('vq-draw-eraser').classList.remove('active');
    });
    _el('vq-draw-eraser').addEventListener('click', () => {
      drawTool = 'eraser';
      _el('vq-draw-eraser').classList.add('active');
      _el('vq-draw-pen').classList.remove('active');
    });
    _el('vq-draw-clear').addEventListener('click', () => {
      if (!drawCtx) return;
      drawCtx.fillStyle = '#ffffff';
      drawCtx.fillRect(0, 0, drawCtx.canvas.width, drawCtx.canvas.height);
    });
    _el('vq-draw-cancel').addEventListener('click', _closeDraw);
    _el('vq-draw-done').addEventListener('click', _finishDraw);
  }

  /* ── Submit button binding ───────────────────────────────── */
  function _bindSubmitEvent() {
    _el('vq-submit-btn').addEventListener('click', _submitAnswer);
  }

  return { show, init, setAnswerCallback };

})();
