# GTA V – San Andreas Interactive Map

A fully client-side interactive map for GTA V built on [Leaflet](https://leafletjs.com/) and the fan-made `gta5-map.github.io` satellite/road tile set.

---

## Features

- 🗺 Satellite and road tile modes
- 🎯 250+ annotated locations: missions, collectibles, landmarks, easter eggs and more
- ☑️ Completion tracker (persisted to `localStorage`)
- 🔍 Real-time fuzzy search across title, type, description and character
- 📂 Collapsible category tree with per-type layer toggles
- 📌 Click any item → map flies to it and a detail card slides up

---

## Quick Start

Open `index.html` in any modern browser. No build step or server required — all assets are either local or loaded from public CDNs.

> **Tip:** For tile loading to work properly, serve the files from a local HTTP server rather than opening the HTML file directly (`file://`). A one-liner:
>
> ```bash
> npx serve .
> # or
> python3 -m http.server 8080
> ```

---

## Project Structure

```
gta5-map/
├── index.html                  # HTML shell — imports all CSS and JS modules
│
├── src/
│   ├── css/
│   │   ├── variables.css       # Design tokens (colours, spacing, radii)
│   │   ├── base.css            # CSS reset + root layout
│   │   ├── sidebar.css         # Sidebar shell, header, search, progress bar
│   │   ├── tree.css            # Category tree and item rows
│   │   ├── detail-card.css     # Slide-up detail panel + Leaflet popup styles
│   │   ├── map.css             # Map container and overlay controls
│   │   └── leaflet-overrides.css  # Dark-theme overrides for Leaflet widgets
│   │
│   └── js/
│       ├── data/
│       │   ├── locations.js    # All map location objects (LOCS array)
│       │   ├── colors.js       # COLORS, EMOJI, CHAR_COLORS, getMissionColor()
│       │   └── categories.js   # CAT_GROUPS, ZOOM_FOR_TYPE
│       │
│       ├── storage.js          # localStorage persistence (loadDone / saveDone)
│       ├── map.js              # Leaflet map + tile layers + coord readout
│       ├── markers.js          # Marker icons, layer groups, markerMap
│       ├── detail.js           # Detail card: showDetail(), flyTo(), close
│       ├── tree.js             # Sidebar tree builder + all tree interactions
│       ├── search.js           # Search input + results dropdown
│       └── main.js             # Entry point: doneSet, updateProgress()
```

### Module load order

Scripts are loaded in dependency order via plain `<script>` tags in `index.html`:

```
data/locations  →  data/colors  →  data/categories
→  storage  →  map  →  markers  →  detail  →  tree  →  search  →  main
```

Because every module writes to the global scope, no bundler is required. If you want to convert this to ES modules, add `type="module"` to each `<script>` tag and replace the implicit globals with explicit `import`/`export` statements.

---

## Adding Locations

Append an entry to the `LOCS` array in `src/js/data/locations.js`:

```js
{
  type: 'Easter Egg',         // must match a key in COLORS / EMOJI
  cat:  'World',              // top-level group (used for filtering)
  title: 'My New Location',
  lat:  67.5,                 // GTA V tile-space latitude
  lng: -118.2,                // GTA V tile-space longitude
  char: 'F',                  // optional: F / M / T / combos
  desc: 'Short description shown in the detail card.',
  imgs: [],                   // optional: array of image URLs
}
```

Coordinate reference points:
| Location              | lat   | lng    |
|-----------------------|-------|--------|
| Los Santos downtown   | 67    | −119   |
| Sandy Shores          | 75    | −107   |
| Paleto Bay            | 83    | −135   |
| Mount Chiliad peak    | 78    | −115   |
| Fort Zancudo          | 76    | −129   |
| LSIA (airport)        | 62    | −120   |

---

## Customising Styles

All colours, font sizes and spacing values live in `src/css/variables.css` as CSS custom properties. Change them there and they cascade everywhere automatically.

---

## Browser Support

Any modern browser with ES2015+ support (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+).
