/* ============================================
   花圃數學園 - Storage Module (localStorage)
   ============================================ */

const STORAGE_KEY = 'math_flower_game';

const Storage = {

  /** Default data structure */
  _default() {
    return {
      playerName: '',
      grade: 1,          // active grade (1–6)
      progress: {},      // 一年級
      progressG2: {},    // 二年級
      progressG3: {},    // 三年級
      progressG4: {},    // 四年級
      progressG5: {},    // 五年級
      progressG6: {},    // 六年級
      lastPlayed: null,
      version: 3
    };
  },

  /** Load saved data; returns default if none found */
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return this._default();
      const data = JSON.parse(raw);
      // Migrate older versions
      if (!data.progress)   data.progress   = {};
      if (!data.progressG2) data.progressG2 = {};
      if (!data.progressG3) data.progressG3 = {};
      if (!data.progressG4) data.progressG4 = {};
      if (!data.progressG5) data.progressG5 = {};
      if (!data.progressG6) data.progressG6 = {};
      if (!data.grade)      data.grade       = 1;
      return data;
    } catch (e) {
      console.warn('Storage load error, resetting:', e);
      return this._default();
    }
  },

  /** Persist data to localStorage */
  save(data) {
    try {
      data.lastPlayed = new Date().toISOString().slice(0, 10);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Storage save error:', e);
    }
  },

  /** Check if player has been set up */
  hasPlayer() {
    return !!this.load().playerName;
  },

  /** Set player name */
  setPlayerName(name) {
    const data = this.load();
    data.playerName = name.trim();
    this.save(data);
  },

  /** Get player name */
  getPlayerName() {
    return this.load().playerName || '玩家';
  },

  /** Get current active grade (1 or 2) */
  getGrade() {
    return this.load().grade || 1;
  },

  /** Set current active grade */
  setGrade(g) {
    const data = this.load();
    data.grade = g;
    this.save(data);
  },

  /** Get the active progress object (based on current grade) */
  getActiveProgress() {
    const data = this.load();
    const key = ['progress','progressG2','progressG3','progressG4','progressG5','progressG6'][data.grade - 1] || 'progress';
    return data[key];
  },

  /** Get progress for a specific flower (grade-aware) */
  getFlowerProgress(flowerId) {
    const prog = this.getActiveProgress();
    return prog[flowerId] || { correct: 0, totalAttempts: 0 };
  },

  /** Get grade-keyed progress from loaded data */
  _prog(data) {
    const key = ['progress','progressG2','progressG3','progressG4','progressG5','progressG6'][data.grade - 1] || 'progress';
    if (!data[key]) data[key] = {};
    return data[key];
  },

  /** Record a correct answer for a flower (grade-aware) */
  addCorrect(flowerId) {
    const data = this.load();
    const prog = this._prog(data);
    if (!prog[flowerId]) prog[flowerId] = { correct: 0, totalAttempts: 0 };
    prog[flowerId].correct += 1;
    prog[flowerId].totalAttempts = (prog[flowerId].totalAttempts || 0) + 1;
    this.save(data);
    return prog[flowerId].correct;
  },

  /** Record an incorrect attempt (grade-aware) */
  addAttempt(flowerId) {
    const data = this.load();
    const prog = this._prog(data);
    if (!prog[flowerId]) prog[flowerId] = { correct: 0, totalAttempts: 0 };
    prog[flowerId].totalAttempts = (prog[flowerId].totalAttempts || 0) + 1;
    this.save(data);
  },

  /** Reset ALL data (with confirmed intent) */
  reset() {
    localStorage.removeItem(STORAGE_KEY);
  }
};
