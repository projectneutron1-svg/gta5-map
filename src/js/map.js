/**
 * src/js/map.js
 *
 * Leaflet map initialisation: bounds, tile layers, tile-switcher buttons,
 * coordinate readout, and resize handling.
 *
 * Exports: `map`, `tSat`, `tRoad`
 */

// ── Map bounds ────────────────────────────────────────────────────────────────
// The San Andreas landmass sits roughly at lat [54..88], lng [-162..-83].
// We add ocean padding to prevent jarring hard edges while panning.
const BOUNDS_SW  = [50, -168];
const BOUNDS_NE  = [90, -75];
const MAP_BOUNDS = L.latLngBounds(BOUNDS_SW, BOUNDS_NE);

// ── Map instance ──────────────────────────────────────────────────────────────
const map = L.map('map', {
  minZoom:             3,
  maxZoom:             7,
  zoomControl:         true,
  maxBounds:           MAP_BOUNDS,
  maxBoundsViscosity:  1.0,   // hard stop — cannot drag outside bounds
});

map.zoomControl.setPosition('bottomright');
map.setView([70, -119], 4);

// ── Tile layers ───────────────────────────────────────────────────────────────
const TILE_BASE = 'https://gta5-map.github.io/tiles';

const tSat = L.tileLayer(`${TILE_BASE}/satellite/{z}-{x}_{y}.png`, {
  tileSize:    256,
  maxZoom:     7,
  minZoom:     3,
  noWrap:      true,
  attribution: '© GTA V fan map tiles',
});

const tRoad = L.tileLayer(`${TILE_BASE}/road/{z}-{x}_{y}.png`, {
  tileSize:    256,
  maxZoom:     7,
  minZoom:     3,
  noWrap:      true,
  attribution: '© GTA V fan map tiles',
});

tSat.addTo(map);
let activeTile = 'sat';

// ── Tile-switcher buttons ─────────────────────────────────────────────────────
document.querySelectorAll('[data-t]').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.t === activeTile) return;

    // Remove current layer
    (activeTile === 'sat' ? tSat : tRoad).removeFrom(map);

    // Activate new layer
    activeTile = btn.dataset.t;
    (activeTile === 'sat' ? tSat : tRoad).addTo(map);

    // Update button styles
    document.querySelectorAll('[data-t]').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ── Coordinate readout ────────────────────────────────────────────────────────
const coordsEl = document.getElementById('coords');

map.on('mousemove', (e) => {
  coordsEl.textContent =
    `${e.latlng.lat.toFixed(2)}° ${e.latlng.lng.toFixed(2)}°  Z${map.getZoom()}`;
});

// ── Resize / invalidation ─────────────────────────────────────────────────────
// Fix black/empty tiles that appear when the container renders late or resizes.
window.addEventListener('resize',    () => map.invalidateSize());
map.on('zoomend',  () => map.invalidateSize());
map.on('zoomstart', () => setTimeout(() => map.invalidateSize(), 50));
setTimeout(() => map.invalidateSize(), 100);
