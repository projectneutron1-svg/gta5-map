/**
 * src/js/tree.js
 *
 * Builds the sidebar category tree and wires all interactions:
 *   - category collapse/expand
 *   - category-level visibility checkboxes
 *   - type-level visibility checkboxes
 *   - per-item completion checkboxes
 *   - item click → flyTo + showDetail
 *   - Expand All / Collapse All buttons
 *
 * Depends on: map, LOCS, COLORS, EMOJI, CAT_GROUPS, groups, typeList,
 *             doneSet, saveDone, updateProgress, refreshMarkerIcon,
 *             flyTo, showDetail
 */

const treeWrap = document.getElementById('tree-wrap');

/** Tracks which type layers are currently visible on the map. */
const activeTypes = new Set(typeList);

// ── Tree builder ──────────────────────────────────────────────────────────────

function buildTree() {
  treeWrap.innerHTML = '';

  Object.entries(CAT_GROUPS).forEach(([groupName, types]) => {
    const validTypes = types.filter((t) => typeList.includes(t));
    if (!validTypes.length) return;

    const totalCount = validTypes.reduce(
      (sum, t) => sum + LOCS.filter((l) => l.type === t).length,
      0
    );

    // ── Category container ──
    const catDiv = document.createElement('div');
    catDiv.className = 'tree-cat';

    // ── Category header ──
    const header = document.createElement('div');
    header.className = 'tree-cat-header open';

    // Category-level checkbox
    const check = document.createElement('div');
    check.className = 'cat-check checked';
    if (!validTypes.every((t) => activeTypes.has(t))) {
      check.classList.remove('checked');
    }

    const labelSpan = document.createElement('span');
    labelSpan.innerHTML = `${groupName} <span class="cat-count">${totalCount}</span>`;

    const arrow = document.createElement('span');
    arrow.className  = 'cat-arrow';
    arrow.textContent = '▶';

    header.append(check, labelSpan, arrow);

    // ── Items list (starts open) ──
    const itemsList = document.createElement('div');
    itemsList.className = 'tree-items open';

    // ── Sync parent checkbox ──
    const syncParentCheck = () => {
      if (validTypes.every((t) => activeTypes.has(t))) {
        check.classList.add('checked');
      } else {
        check.classList.remove('checked');
      }
    };

    // ── Category checkbox handler ──
    check.addEventListener('click', (e) => {
      e.stopPropagation();
      const isChecked = check.classList.contains('checked');

      if (isChecked) {
        check.classList.remove('checked');
        validTypes.forEach((t) => {
          activeTypes.delete(t);
          map.removeLayer(groups[t]);
        });
        itemsList.querySelectorAll('.type-check').forEach((tc) => tc.classList.remove('checked'));
      } else {
        check.classList.add('checked');
        validTypes.forEach((t) => {
          activeTypes.add(t);
          groups[t].addTo(map);
        });
        itemsList.querySelectorAll('.type-check').forEach((tc) => tc.classList.add('checked'));
      }
    });

    // ── Category header collapse toggle ──
    header.addEventListener('click', (e) => {
      if (e.target === check) return;
      const isOpen = itemsList.classList.contains('open');
      itemsList.classList.toggle('open', !isOpen);
      header.classList.toggle('open', !isOpen);
    });

    // ── Type rows ──
    validTypes.forEach((type) => {
      const colour  = COLORS[type] || '#aaaaaa';
      const typeLocs = LOCS.filter((l) => l.type === type);
      const count    = typeLocs.length;

      // Type row wrapper
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;padding:4px 16px;gap:8px;';

      // Type-level checkbox
      const tc = document.createElement('div');
      tc.className  = 'cat-check type-check';
      tc.style.cssText = [
        `width:13px;height:13px;border-radius:3px;`,
        `border:1.5px solid ${colour};`,
        `flex-shrink:0;display:flex;align-items:center;justify-content:center;`,
        `cursor:pointer;transition:all .15s;`,
      ].join('');

      const checkMark = document.createElement('span');
      checkMark.style.cssText = 'font-size:8px;color:#000;font-weight:900;';
      tc.appendChild(checkMark);

      const updateTypeCheck = () => {
        const on = activeTypes.has(type);
        tc.style.background  = on ? colour : 'transparent';
        checkMark.textContent = on ? '✓' : '';
      };
      updateTypeCheck();

      tc.addEventListener('click', () => {
        if (activeTypes.has(type)) {
          activeTypes.delete(type);
          map.removeLayer(groups[type]);
        } else {
          activeTypes.add(type);
          groups[type].addTo(map);
        }
        updateTypeCheck();
        syncParentCheck();
      });

      // Type label
      const typeLabel = document.createElement('div');
      typeLabel.style.cssText =
        'font-size:11px;flex:1;color:var(--muted);display:flex;align-items:center;gap:5px;cursor:default;';
      typeLabel.innerHTML =
        `<span style="width:6px;height:6px;border-radius:50%;background:${colour};display:inline-block;flex-shrink:0;"></span>` +
        `<span>${EMOJI[type] || ''} ${type}</span>`;

      // Count badge
      const countBadge = document.createElement('span');
      countBadge.style.cssText = 'font-size:10px;color:var(--muted);font-weight:400;';
      countBadge.textContent = count;

      row.append(tc, typeLabel, countBadge);
      itemsList.appendChild(row);

      // ── Individual location items (skip very large sets) ──
      if (typeLocs.length > 0 && typeLocs.length <= 60) {
        typeLocs.forEach((loc) => {
          const realIdx = LOCS.indexOf(loc);
          const item    = document.createElement('div');
          item.className    = 'tree-item';
          item.dataset.idx  = realIdx;
          if (doneSet.has(realIdx)) item.style.opacity = '0.45';

          item.innerHTML =
            `<div class="item-dot" style="background:${colour}"></div>` +
            `<span class="item-name">${loc.title}</span>` +
            `<div class="item-done${doneSet.has(realIdx) ? ' checked' : ''}"></div>`;

          // Name/dot click → fly + detail
          item.addEventListener('click', (e) => {
            if (e.target.classList.contains('item-done')) return;
            document.querySelectorAll('.tree-item').forEach((x) => x.classList.remove('active'));
            item.classList.add('active');
            flyTo(realIdx);
            showDetail(realIdx);
          });

          // Completion checkbox click
          item.querySelector('.item-done').addEventListener('click', (e) => {
            e.stopPropagation();
            const box = e.target;

            if (doneSet.has(realIdx)) {
              doneSet.delete(realIdx);
              box.classList.remove('checked');
              item.style.opacity = '1';
            } else {
              doneSet.add(realIdx);
              box.classList.add('checked');
              item.style.opacity = '0.45';
            }

            saveDone(doneSet);
            updateProgress();
            refreshMarkerIcon(realIdx);
          });

          itemsList.appendChild(item);
        });
      }
    });

    catDiv.append(header, itemsList);
    treeWrap.appendChild(catDiv);
  });
}

buildTree();

// ── Expand / Collapse All ─────────────────────────────────────────────────────

document.getElementById('btn-expand-all').addEventListener('click', () => {
  document.querySelectorAll('.tree-items').forEach((el) => el.classList.add('open'));
  document.querySelectorAll('.tree-cat-header').forEach((el) => el.classList.add('open'));
});

document.getElementById('btn-collapse-all').addEventListener('click', () => {
  document.querySelectorAll('.tree-items').forEach((el) => el.classList.remove('open'));
  document.querySelectorAll('.tree-cat-header').forEach((el) => el.classList.remove('open'));
});
