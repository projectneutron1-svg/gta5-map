/**
 * src/js/detail.js
 *
 * Controls the sliding detail card at the bottom of the sidebar.
 * Exposes `showDetail` and `flyTo` for use by tree.js and search.js.
 *
 * Depends on: map, LOCS, EMOJI, getMissionColor, markerMap, ZOOM_FOR_TYPE
 */

const detailCard  = document.getElementById('detail-card');
const treeWrap    = document.getElementById('tree-wrap');
const dcClose     = document.getElementById('dc-close');

const dcTag   = document.getElementById('dc-tag');
const dcTitle = document.getElementById('dc-title');
const dcChar  = document.getElementById('dc-char');
const dcDesc  = document.getElementById('dc-desc');
const dcImgs  = document.getElementById('dc-imgs');

/**
 * Fly the map to a location and zoom to the appropriate level.
 *
 * @param {number} idx – Index into LOCS.
 */
function flyTo(idx) {
  const loc  = LOCS[idx];
  const zoom = ZOOM_FOR_TYPE[loc.type] || 6;
  map.flyTo([loc.lat, loc.lng], zoom, { duration: 0.8 });
}

/**
 * Populate and reveal the detail card for the given location.
 * Also opens the Leaflet popup after the fly animation completes.
 *
 * @param {number} idx – Index into LOCS.
 */
function showDetail(idx) {
  const loc    = LOCS[idx];
  const colour = getMissionColor(loc);

  dcTag.innerHTML  = `<span style="color:${colour}">${EMOJI[loc.type] || '📍'} ${loc.type}</span>`;
  dcTitle.textContent = loc.title;

  if (loc.char) {
    dcChar.textContent = `Character: ${loc.char}`;
    dcChar.style.color = colour;
  } else {
    dcChar.textContent = '';
    dcChar.style.color = '';
  }

  dcDesc.textContent = loc.desc || 'No description available.';

  // Image strip
  dcImgs.innerHTML = '';
  if (loc.imgs && loc.imgs.length) {
    loc.imgs.forEach((url) => {
      const img = document.createElement('img');
      img.src  = url;
      img.alt  = loc.title;
      img.role = 'listitem';
      img.addEventListener('error', () => { img.style.display = 'none'; });
      dcImgs.appendChild(img);
    });
  }

  detailCard.classList.add('visible');
  treeWrap.classList.add('card-open');

  // Open popup after fly animation
  setTimeout(() => {
    const marker = markerMap.get(idx);
    if (marker) marker.openPopup();
  }, 850);
}

/** Close the detail card and clean up active tree highlighting. */
function closeDetail() {
  detailCard.classList.remove('visible');
  treeWrap.classList.remove('card-open');
  document.querySelectorAll('.tree-item').forEach((el) => el.classList.remove('active'));
}

dcClose.addEventListener('click', closeDetail);
