/**
 * src/js/markers.js
 *
 * Builds and manages all Leaflet markers: icon creation, layer groups,
 * popup binding, and icon refresh when completion state changes.
 *
 * Depends on: map, LOCS, COLORS, EMOJI, getMissionColor, doneSet
 * Exports: `groups`, `markerMap`, `mkIcon`, `refreshMarkerIcon`
 */

const MARKER_SIZE = 12; // px diameter of each dot marker

/**
 * Build a circular div icon for a marker.
 *
 * @param {object|string} locOrType – Full loc object (preferred) or type string.
 * @param {boolean}       done      – Whether this location is completed.
 * @returns {L.DivIcon}
 */
function mkIcon(locOrType, done) {
  const colour =
    typeof locOrType === 'object'
      ? getMissionColor(locOrType)
      : (COLORS[locOrType] || '#aaaaaa');

  const opacity = done ? '0.4' : '1';
  const filter  = done ? 'filter:grayscale(80%);' : '';
  const s       = MARKER_SIZE;

  return L.divIcon({
    html: `<div style="
      width:${s}px;height:${s}px;border-radius:50%;
      background:${colour};
      border:2px solid rgba(0,0,0,0.6);
      box-shadow:0 0 6px ${colour}99;
      cursor:pointer;
      opacity:${opacity};
      ${filter}
    "></div>`,
    className:    '',
    iconSize:     [s, s],
    iconAnchor:   [s / 2, s / 2],
    popupAnchor:  [0, -8],
  });
}

// ── Layer groups (one per type) ───────────────────────────────────────────────
const typeList = [...new Set(LOCS.map((l) => l.type))].sort();
const groups   = {};

typeList.forEach((t) => {
  groups[t] = L.layerGroup().addTo(map);
});

// ── Marker index map (location index → Leaflet marker) ───────────────────────
const markerMap = new Map();

LOCS.forEach((loc, idx) => {
  const isDone = doneSet.has(idx);
  const colour = getMissionColor(loc);
  const marker = L.marker([loc.lat, loc.lng], { icon: mkIcon(loc, isDone) });

  marker.bindPopup(
    `<div class="lpu">
      <div class="lpu-tag" style="color:${colour}">${EMOJI[loc.type] || '📍'} ${loc.type}</div>
      <div class="lpu-title">${loc.title}</div>
      ${loc.char ? `<div class="lpu-char">Character: ${loc.char}</div>` : ''}
      <div class="lpu-hint">Click sidebar entry for details</div>
    </div>`,
    { maxWidth: 240 }
  );

  marker.on('click', () => showDetail(idx));
  marker.addTo(groups[loc.type]);
  markerMap.set(idx, marker);
});

/**
 * Refresh the icon for a single marker after its done-state changes.
 *
 * @param {number} idx – Index into LOCS.
 */
function refreshMarkerIcon(idx) {
  const m = markerMap.get(idx);
  if (m) m.setIcon(mkIcon(LOCS[idx], doneSet.has(idx)));
}
