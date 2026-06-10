/**
 * src/js/data/categories.js
 *
 * Top-level category groups shown in the sidebar tree.
 * Each key is the visible group heading; the value is the ordered list of
 * location types that belong to it.
 */

const CAT_GROUPS = {
  'Story': [
    'Main Mission',
    'Heist Setup',
  ],
  'Side Missions': [
    'Strangers & Freaks',
    'Assassination',
  ],
  'Collectibles': [
    'Spaceship Part',
    'Nuclear Waste',
    'Hidden Package',
    'Vehicle Spawn',
    'Epsilon Car',
    'Epsilon Tract',
  ],
  'Properties & Services': [
    'Safehouse',
    'Property',
    'Hospital',
    'Police Station',
    'Airport',
  ],
  'World & Secrets': [
    'Landmark',
    'Easter Egg',
    'Gang Territory',
    'Activity',
  ],
};

/** How far to zoom in when flying to a location of each type. */
const ZOOM_FOR_TYPE = {
  'Spaceship Part':     7,
  'Nuclear Waste':      7,
  'Hidden Package':     7,
  'Easter Egg':         7,
  'Epsilon Car':        7,
  'Epsilon Tract':      7,
  'Safehouse':          7,
  'Hospital':           7,
  'Police Station':     7,
  'Airport':            6,
  'Landmark':           5,
  'Gang Territory':     5,
  'Property':           6,
  'Activity':           6,
  'Main Mission':       6,
  'Heist Setup':        6,
  'Strangers & Freaks': 6,
  'Assassination':      6,
  'Vehicle Spawn':      7,
};
