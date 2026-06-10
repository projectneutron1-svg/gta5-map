/**
 * src/js/search.js
 *
 * Handles the search input and results dropdown in the sidebar header.
 * On selection: flies to the location, shows the detail card, and
 * highlights the matching sidebar tree item.
 *
 * Depends on: LOCS, COLORS, EMOJI, flyTo, showDetail
 */

const searchInput   = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

/** Maximum number of results shown in the dropdown. */
const MAX_RESULTS = 14;

// ── Input handler ─────────────────────────────────────────────────────────────

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  searchResults.innerHTML = '';

  if (!query) {
    searchResults.style.display = 'none';
    return;
  }

  const hits = LOCS
    .map((loc, idx) => ({ loc, idx }))
    .filter(({ loc }) =>
      loc.title.toLowerCase().includes(query) ||
      loc.type.toLowerCase().includes(query)  ||
      (loc.desc || '').toLowerCase().includes(query) ||
      (loc.char || '').toLowerCase().includes(query)
    )
    .slice(0, MAX_RESULTS);

  if (!hits.length) {
    searchResults.style.display = 'none';
    return;
  }

  hits.forEach(({ loc, idx }) => {
    const colour = COLORS[loc.type] || '#aaaaaa';
    const item   = document.createElement('div');
    item.className  = 'sr-item';
    item.role       = 'option';
    item.innerHTML  =
      `<div class="sr-name">${loc.title}</div>` +
      `<div class="sr-meta">
        <span class="sr-dot" style="background:${colour}"></span>
        ${loc.type}
        ${loc.char ? `· <span style="color:#f7c948">${loc.char}</span>` : ''}
      </div>`;

    item.addEventListener('click', () => selectResult(idx));
    searchResults.appendChild(item);
  });

  searchResults.style.display = 'block';
});

// ── Result selection ──────────────────────────────────────────────────────────

/**
 * Select a result: hide dropdown, fly map, show detail, highlight tree item.
 *
 * @param {number} idx – Index into LOCS.
 */
function selectResult(idx) {
  searchResults.style.display = 'none';
  searchInput.value = '';

  flyTo(idx);
  showDetail(idx);

  // Highlight and scroll to the matching tree item
  document.querySelectorAll('.tree-item').forEach((el) => el.classList.remove('active'));

  const treeItem = document.querySelector(`.tree-item[data-idx="${idx}"]`);
  if (treeItem) {
    const parentList = treeItem.closest('.tree-items');
    if (parentList && !parentList.classList.contains('open')) {
      parentList.classList.add('open');
      const parentHeader = parentList.previousElementSibling;
      if (parentHeader) parentHeader.classList.add('open');
    }
    treeItem.classList.add('active');
    treeItem.scrollIntoView({ block: 'nearest' });
  }
}

// ── Close dropdown on outside click ──────────────────────────────────────────

document.addEventListener('click', (e) => {
  if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
    searchResults.style.display = 'none';
  }
});

// ── Close dropdown on Escape ──────────────────────────────────────────────────

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchResults.style.display = 'none';
    searchInput.blur();
  }
});
