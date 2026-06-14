/**
 * src/js/data/categories.js
 *
 * FIXED: Added missing "Properties & Services" group that contains
 * Safehouse, Property, Hospital, Police Station, Airport types.
 * Previously these types were silently absent from the sidebar tree.
 *
 * Also added missing ZOOM_FOR_TYPE entries for Vehicle Spawn,
 * Epsilon Car, and Epsilon Tract (now zoom 7 instead of falling back to 6).
 *
 * UPDATE: Added "Weapons" group with all GTA V weapon categories from
 * the FiveM weapon-models reference.
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
  // BUG FIX: This entire group was missing. Safehouse/Property/Hospital/
  // Police Station/Airport were never rendered in the sidebar.
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
  'Weapons': [
    'Pistol',
    'SMG',
    'Shotgun',
    'Assault Rifle',
    'LMG',
    'Sniper Rifle',
    'Heavy Weapon',
    'Thrown',
    'Melee',
  ],
};

/** How far to zoom in when flying to a location of each type. */
const ZOOM_FOR_TYPE = {
  'Spaceship Part':     7,
  'Nuclear Waste':      7,
  'Hidden Package':     7,
  'Easter Egg':         7,
  'Epsilon Car':        7,  // BUG FIX: was missing, fell back to 6
  'Epsilon Tract':      7,  // BUG FIX: was missing, fell back to 6
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
  'Vehicle Spawn':      7,  // BUG FIX: was missing, fell back to 6
  // Weapon types — zoom to district level
  'Pistol':             7,
  'SMG':                7,
  'Shotgun':            7,
  'Assault Rifle':      7,
  'LMG':                7,
  'Sniper Rifle':       7,
  'Heavy Weapon':       7,
  'Thrown':             7,
  'Melee':              7,
};
