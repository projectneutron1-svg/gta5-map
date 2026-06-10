# GTA V – San Andreas Interactive Map

A fully client-side interactive map for GTA V built on [Leaflet](https://leafletjs.com/) and the fan-made `gta5-map.github.io` satellite/road tile set.

---

## ✅ React Rebuild (current)

The app has been fully rebuilt as a single self-contained React component: **`gta5-map.jsx`**

### Bug fixes in this rebuild

| Bug | Fix |
|-----|-----|
| `CAT_GROUPS` missing `"Properties & Services"` group | Added — Safehouses, Properties, Hospitals, Police Stations, Airports now appear in the sidebar |
| All Safehouse/Property/Hospital/Police/Airport `cat` fields wrong (`"Properties"`, `"Services"`) | Corrected to `"Properties & Services"` |
| `ZOOM_FOR_TYPE` missing `Vehicle Spawn`, `Epsilon Car`, `Epsilon Tract` | All three now zoom to level 7 |
| Popup timer race condition — stale popup opens on top of new selection | `clearTimeout` before each new `setTimeout` |
| Search `scrollIntoView` fires before tree expand reflow | Double `requestAnimationFrame` defers scroll |

### Features

- 🗺 Satellite and road tile modes
- 🎯 250+ annotated locations: missions, collectibles, landmarks, easter eggs and more
- ☑️ Completion tracker (persisted to `localStorage`)
- 🔍 Real-time search across title, type, description and character
- 📂 Collapsible category tree with per-type layer toggles
- 📌 Click any item → map flies to it and a detail card slides up

### Quick Start

```bash
# Install deps (React + Leaflet)
npm install react react-dom leaflet

# Then import gta5-map.jsx into your React app
import GTA5Map from './gta5-map';
```

Or open with Vite / CRA. Make sure Leaflet's JS is available globally (`window.L`).

---

## Legacy (vanilla JS)

The original `src/` folder contains the vanilla JS modules for reference. They are no longer the primary codebase — use `gta5-map.jsx` instead.

---

## Adding Locations

Edit the `LOCS` array in `gta5-map.jsx`:

```js
{
  type: 'Easter Egg',            // must match a key in COLORS / EMOJI
  cat:  'World & Secrets',       // must match a key in CAT_GROUPS
  title: 'My New Location',
  lat:  67.5,
  lng: -118.2,
  char: 'F',                     // optional
  desc: 'Short description.',
  imgs: [],
}
```

### Coordinate reference

| Location              | lat | lng  |
|-----------------------|-----|------|
| Los Santos downtown   | 67  | −119 |
| Sandy Shores          | 75  | −107 |
| Paleto Bay            | 83  | −135 |
| Mount Chiliad peak    | 78  | −115 |
| Fort Zancudo          | 76  | −129 |
| LSIA (airport)        | 62  | −120 |
