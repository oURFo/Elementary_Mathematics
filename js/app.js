/* ============================================
   花圃數學園 - App Controller (Main Entry)
   ============================================ */

document.addEventListener('DOMContentLoaded', async () => {

  /* ── 1. Load question bank ─────────────── */
  await QuestionManager.init();

  /* ── 2. Onboarding / player check ─────── */
  if (!Storage.hasPlayer()) {
    showOnboarding();
  } else {
    startApp();
  }

  /* ── 3. Bind global events ─────────────── */
  bindEvents();
});

/* ======================================================
   Onboarding
   ====================================================== */
function showOnboarding() {
  const overlay = document.getElementById('onboarding-overlay');
  overlay.classList.remove('hidden');

  const input = document.getElementById('player-name-input');
  const startBtn = document.getElementById('start-btn');

  input.focus();

  function handleStart() {
    const name = input.value.trim();
    if (!name) {
      input.style.borderColor = '#e63946';
      input.placeholder = '請輸入名字！';
      input.focus();
      return;
    }
    Storage.setPlayerName(name);
    overlay.classList.add('hidden');
    startApp();
  }

  startBtn.addEventListener('click', handleStart);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') handleStart(); });
}

/* ======================================================
   App Start
   ====================================================== */
function startApp() {
  // Always ensure the onboarding overlay is hidden (covers returning-user case)
  document.getElementById('onboarding-overlay').classList.add('hidden');

  // Show player name in header (names may contain Chinese characters)
  const name = Storage.getPlayerName();
  const nameEl = document.getElementById('player-name-display');
  nameEl.innerHTML = (typeof toRuby === 'function') ? toRuby(name) : name;

  // Render flower garden
  renderFlowerGrid();

  // Init scratchpad canvas (resize listener is registered internally)
  QuestionManager.initScratchpad();
}

/* ======================================================
   Event Bindings
   ====================================================== */
function bindEvents() {

  /* Reset button → show confirm modal */
  document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('reset-overlay').classList.remove('hidden');
  });

  /* Cancel reset */
  document.getElementById('cancel-reset-btn').addEventListener('click', () => {
    document.getElementById('reset-overlay').classList.add('hidden');
  });

  /* Confirm reset */
  document.getElementById('confirm-reset-btn').addEventListener('click', () => {
    Storage.reset();
    document.getElementById('reset-overlay').classList.add('hidden');
    // Reload page to restart fresh
    window.location.reload();
  });

  /* Close reset overlay when clicking backdrop */
  document.getElementById('reset-overlay').addEventListener('click', function(e) {
    if (e.target === this) this.classList.add('hidden');
  });

  /* Level-up modal close */
  document.getElementById('levelup-close-btn').addEventListener('click', () => {
    document.getElementById('levelup-overlay').classList.add('hidden');
  });

  /* Close level-up overlay clicking backdrop */
  document.getElementById('levelup-overlay').addEventListener('click', function(e) {
    if (e.target === this) this.classList.add('hidden');
  });

  /* MC option buttons */
  document.querySelectorAll('.mc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx);
      QuestionManager.handleMcAnswer(idx);
    });
  });

  /* Numpad buttons */
  document.querySelectorAll('.np-btn').forEach(btn => {
    if (btn.dataset.num !== undefined) {
      btn.addEventListener('click', () => {
        QuestionManager.appendDigit(btn.dataset.num);
      });
    }
  });

  /* Numpad delete */
  document.getElementById('np-del').addEventListener('click', () => {
    QuestionManager.deleteDigit();
  });

  /* Submit answer */
  document.getElementById('submit-btn').addEventListener('click', () => {
    QuestionManager.handleFillSubmit();
  });

  /* Keyboard support */
  document.addEventListener('keydown', e => {
    // Only when fill-in answer area is visible
    const answerArea = document.getElementById('answer-area');
    if (answerArea.classList.contains('hidden')) return;

    if (e.key >= '0' && e.key <= '9') {
      QuestionManager.appendDigit(e.key);
    } else if (e.key === 'Backspace') {
      QuestionManager.deleteDigit();
    } else if (e.key === 'Enter') {
      QuestionManager.handleFillSubmit();
    }
  });
}
