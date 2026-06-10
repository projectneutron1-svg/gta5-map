/**
 * src/js/data/colors.js
 *
 * Color and emoji mappings keyed by location type string.
 * Also exports character-combination colour helpers.
 */

/** Per-type hex colours used for markers, dots and sidebar labels. */
const COLORS = {
  'Main Mission':       '#60a5fa',
  'Heist Setup':        '#818cf8',
  'Strangers & Freaks': '#a78bfa',
  'Assassination':      '#f43f5e',
  'Safehouse':          '#34d399',
  'Easter Egg':         '#fbbf24',
  'Property':           '#fb923c',
  'Hospital':           '#f87171',
  'Police Station':     '#93c5fd',
  'Airport':            '#67e8f9',
  'Landmark':           '#e2e8f0',
  'Activity':           '#86efac',
  'Spaceship Part':     '#7dd3fc',
  'Nuclear Waste':      '#4ade80',
  'Hidden Package':     '#bbf7d0',
  'Vehicle Spawn':      '#a5b4fc',
  'Gang Territory':     '#f43f5e',
  'Epsilon Car':        '#d8b4fe',
  'Epsilon Tract':      '#c084fc',
};

/** Emoji icons shown next to type labels throughout the UI. */
const EMOJI = {
  'Main Mission':       '🎯',
  'Heist Setup':        '💰',
  'Strangers & Freaks': '❓',
  'Assassination':      '🔫',
  'Safehouse':          '🏠',
  'Easter Egg':         '🥚',
  'Property':           '🏢',
  'Hospital':           '🏥',
  'Police Station':     '🚔',
  'Airport':            '✈️',
  'Landmark':           '📍',
  'Activity':           '🎮',
  'Spaceship Part':     '🛸',
  'Nuclear Waste':      '☢️',
  'Hidden Package':     '💵',
  'Vehicle Spawn':      '🚗',
  'Gang Territory':     '💀',
  'Epsilon Car':        '🚙',
  'Epsilon Tract':      '📜',
};

/**
 * Character colours.
 * F = Franklin (green), M = Michael (blue), T = Trevor (orange).
 * Mixed combos use purple / pink to reflect joint missions.
 */
const CHAR_COLORS = {
  'F':     '#10b981',
  'M':     '#3b82f6',
  'T':     '#f97316',
  'F/L':   '#10b981',
  'F/M':   '#a855f7',
  'F/T':   '#a855f7',
  'M/T':   '#a855f7',
  'M/F':   '#a855f7',
  'T/M':   '#a855f7',
  'T/F':   '#a855f7',
  'F/T/L': '#10b981',
  'M/T/F': '#ec4899',
  'M/T/B': '#6366f1',
  'M/L':   '#3b82f6',
  'F/M/T': '#ec4899',
  'T/M/F': '#ec4899',
  'T/F/L': '#10b981',
  'F/T/M': '#ec4899',
  'F/L/T': '#10b981',
};

/**
 * Returns the best representative colour for a location object.
 * Prefers character colour for story missions; falls back to type colour.
 *
 * @param {object} loc – A location entry from LOCS.
 * @returns {string} CSS hex colour.
 */
function getMissionColor(loc) {
  if (loc.char && CHAR_COLORS[loc.char]) return CHAR_COLORS[loc.char];
  return COLORS[loc.type] || '#aaaaaa';
}
