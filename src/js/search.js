/**
 * src/js/search.js
 *
 * FIXED: Use requestAnimationFrame after expanding the tree parent so
 * the DOM has settled before scrollIntoView fires, preventing the
 * scroll landing in the wrong position.
 *
 * Handles the search input and results dropdown in the sidebar header.
 */

const searchInput   = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const MAX_RESULTS = 14;

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

/**
 * Select a result: hide dropdown, fly map, show detail, highlight tree item.
 * BUG FIX: use requestAnimationFrame after expanding the parent to ensure
 * the DOM has reflowed before scrollIntoView runs.
 * @param {number} idx – Index into LOCS.
 */
function selectResult(idx) {
  searchResults.style.display = 'none';
  searchInput.value = '';

  flyTo(idx);
  showDetail(idx);

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
    // BUG FIX: wait for expand animation before scrolling
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        treeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      });
    });
  }
}

document.addEventListener('click', (e) => {
  if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
    searchResults.style.display = 'none';
  }
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchResults.style.display = 'none';
    searchInput.blur();
  }
});
