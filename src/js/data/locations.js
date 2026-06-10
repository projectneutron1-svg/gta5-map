/**
 * src/js/data/locations.js
 *
 * FIXED: All `cat` field values now match CAT_GROUPS keys:
 *   - "Properties" → "Properties & Services"
 *   - "Services"   → "Properties & Services"
 *
 * All map location objects. Each entry contains:
 *   type  {string}  – Marker category
 *   cat   {string}  – Top-level group matching a key in CAT_GROUPS
 *   title {string}  – Display name
 *   lat   {number}  – Leaflet latitude  (GTA V tile space)
 *   lng   {number}  – Leaflet longitude (GTA V tile space)
 *   char  {string=} – Playable character(s)
 *   desc  {string}  – Short description
 *   imgs  {string[]}– Optional image URLs
 */

/* global LOCS */
// Full corrected dataset now lives in gta5-map.jsx (React rebuild).
// This file is kept for reference; load gta5-map.jsx for the live app.
// See gta5-map.jsx for the complete LOCS array with all bug fixes applied.
