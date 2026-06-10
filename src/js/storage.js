/**
 * src/js/storage.js
 *
 * Thin wrapper around localStorage for persisting completion state.
 * Stores a JSON-serialised array of completed location indices.
 */

const STORAGE_KEY = 'gtav_map_done_v2';

/**
 * Load the set of completed location indices from localStorage.
 * Returns an empty Set if the key is missing or the data is corrupt.
 *
 * @returns {Set<number>}
 */
function loadDone() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
  } catch (_) {
    return new Set();
  }
}

/**
 * Persist the current completion Set to localStorage.
 *
 * @param {Set<number>} set
 */
function saveDone(set) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  } catch (_) {
    // Storage may be full or unavailable – fail silently.
  }
}
