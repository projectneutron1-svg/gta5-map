/**
 * src/js/map.js
 *
 * Leaflet map init. Bounds are tight enough that panning outside the
 * San Andreas tile area is impossible at any zoom level.
 */

// Tight bounds — matches the actual tile coverage of gta5-map.github.io
// Tested: at minZoom=3 the whole landmass fits; these bounds prevent
// dragging into the black void at any zoom.
const BOUNDS_SW  = [54,  -162];
const BOUNDS_NE  = [88,  -83];
const MAP_BOUNDS = L.latLngBounds(BOUNDS_SW, BOUNDS_NE);

const map = L.map("map", {
  minZoom:            3,
  maxZoom:            7,
  zoomControl:        true,
  maxBounds:          MAP_BOUNDS,
  maxBoundsViscosity: 1.0,
});

map.zoomControl.setPosition("bottomright");

// Tile layers
const TILE_BASE = "https://gta5-map.github.io/tiles";

const tSat = L.tileLayer(`${TILE_BASE}/satellite/{z}-{x}_{y}.png`, {
  tileSize: 256, maxZoom: 7, minZoom: 3, noWrap: true,
  bounds: MAP_BOUNDS,
  attribution: "© GTA V fan map tiles",
});

const tRoad = L.tileLayer(`${TILE_BASE}/road/{z}-{x}_{y}.png`, {
  tileSize: 256, maxZoom: 7, minZoom: 3, noWrap: true,
  bounds: MAP_BOUNDS,
  attribution: "© GTA V fan map tiles",
});

tSat.addTo(map);
let activeTile = "sat";

// Centre on San Andreas landmass
map.setView([70, -119], 4);

// Clamp view to bounds on first render
map.once("load", () => map.fitBounds(MAP_BOUNDS, { animate: false }));

// Tile switcher
document.querySelectorAll("[data-t]").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.t === activeTile) return;
    (activeTile === "sat" ? tSat : tRoad).removeFrom(map);
    activeTile = btn.dataset.t;
    (activeTile === "sat" ? tSat : tRoad).addTo(map);
    document.querySelectorAll("[data-t]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Coordinate readout
const coordsEl = document.getElementById("coords");
map.on("mousemove", (e) => {
  coordsEl.textContent =
    `${e.latlng.lat.toFixed(2)}°  ${e.latlng.lng.toFixed(2)}°  Z${map.getZoom()}`;
});

// Prevent panning outside bounds on drag end
map.on("dragend", () => {
  const c = map.getCenter();
  const b = MAP_BOUNDS;
  const clampedLat = Math.max(b.getSouth(), Math.min(b.getNorth(), c.lat));
  const clampedLng = Math.max(b.getWest(),  Math.min(b.getEast(),  c.lng));
  if (clampedLat !== c.lat || clampedLng !== c.lng) {
    map.panTo([clampedLat, clampedLng], { animate: false });
  }
});

// Resize handler — invalidate on any layout change
window.addEventListener("resize",   () => map.invalidateSize());
map.on("zoomend",  () => map.invalidateSize());
map.on("zoomstart", () => setTimeout(() => map.invalidateSize(), 50));
setTimeout(() => map.invalidateSize(), 120);
