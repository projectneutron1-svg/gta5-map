/**
 * src/js/detail.js
 *
 * Controls the sliding detail card at the bottom of the sidebar,
 * and triggers the right panel for rich mission cards.
 *
 * Depends on: map, LOCS, EMOJI, getMissionColor, markerMap,
 *             ZOOM_FOR_TYPE, openRightPanel
 */

const detailCard = document.getElementById('detail-card');
const treeWrapEl = document.getElementById('tree-wrap');
const dcClose    = document.getElementById('dc-close');

const dcTag   = document.getElementById('dc-tag');
const dcTitle = document.getElementById('dc-title');
const dcChar  = document.getElementById('dc-char');
const dcDesc  = document.getElementById('dc-desc');
const dcImgs  = document.getElementById('dc-imgs');

let _popupTimer = null;

/** Fly the map to a location. */
function flyTo(idx) {
  const loc  = LOCS[idx];
  const zoom = ZOOM_FOR_TYPE[loc.type] || 6;
  map.flyTo([loc.lat, loc.lng], zoom, { duration: 0.8 });
}

/** Populate sidebar detail card + open right panel. */
function showDetail(idx) {
  const loc    = LOCS[idx];
  const colour = getMissionColor(loc);

  // Sidebar bottom card (quick summary)
  dcTag.innerHTML     = `<span style="color:${colour}">${EMOJI[loc.type] || '📍'} ${loc.type}</span>`;
  dcTitle.textContent = loc.title;

  if (loc.char) {
    dcChar.textContent = `Character: ${loc.char}`;
    dcChar.style.color = colour;
  } else {
    dcChar.textContent = '';
    dcChar.style.color = '';
  }

  dcDesc.textContent = loc.desc || 'No description available.';

  dcImgs.innerHTML = '';
  if (loc.imgs && loc.imgs.length) {
    loc.imgs.forEach((url) => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = loc.title;
      img.role = 'listitem';
      img.addEventListener('error', () => { img.style.display = 'none'; });
      dcImgs.appendChild(img);
    });
  }

  detailCard.classList.add('visible');
  treeWrapEl.classList.add('card-open');

  // Right panel — rich card or structured fallback
  openRightPanel(idx);

  if (_popupTimer) clearTimeout(_popupTimer);
  _popupTimer = setTimeout(() => {
    const marker = markerMap.get(idx);
    if (marker) marker.openPopup();
    _popupTimer = null;
  }, 850);
}

/** Close sidebar detail card. Does NOT close right panel (user controls that). */
function closeDetail() {
  detailCard.classList.remove('visible');
  treeWrapEl.classList.remove('card-open');
  document.querySelectorAll('.tree-item').forEach((el) => el.classList.remove('active'));
  if (_popupTimer) { clearTimeout(_popupTimer); _popupTimer = null; }
}

dcClose.addEventListener('click', closeDetail);
