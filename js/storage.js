/* ============================================
   花圃數學園 - Storage Module (localStorage)
   ============================================ */

const STORAGE_KEY = 'math_flower_game';

const Storage = {

  /** Default data structure */
  _default() {
    return {
      playerName: '',
      progress: {},   // { [flowerId]: { correct: number, totalAttempts: number } }
      lastPlayed: null,
      version: 1
    };
  },

  /** Load saved data; returns default if none found */
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return this._default();
      const data = JSON.parse(raw);
      // Migrate if needed
      if (!data.progress) data.progress = {};
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

  /** Get progress for a specific flower */
  getFlowerProgress(flowerId) {
    const data = this.load();
    return data.progress[flowerId] || { correct: 0, totalAttempts: 0 };
  },

  /** Record a correct answer for a flower */
  addCorrect(flowerId) {
    const data = this.load();
    if (!data.progress[flowerId]) {
      data.progress[flowerId] = { correct: 0, totalAttempts: 0 };
    }
    data.progress[flowerId].correct += 1;
    data.progress[flowerId].totalAttempts = (data.progress[flowerId].totalAttempts || 0) + 1;
    this.save(data);
    return data.progress[flowerId].correct;
  },

  /** Record an incorrect attempt */
  addAttempt(flowerId) {
    const data = this.load();
    if (!data.progress[flowerId]) {
      data.progress[flowerId] = { correct: 0, totalAttempts: 0 };
    }
    data.progress[flowerId].totalAttempts = (data.progress[flowerId].totalAttempts || 0) + 1;
    this.save(data);
  },

  /** Reset ALL data (with confirmed intent) */
  reset() {
    localStorage.removeItem(STORAGE_KEY);
  }
};
