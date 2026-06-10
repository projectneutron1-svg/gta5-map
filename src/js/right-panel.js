/**
 * src/js/right-panel.js
 *
 * Controls the sliding right info panel.
 * Opens with a rich HTML card when a location has one in CARDS[],
 * otherwise shows a structured placeholder using the loc data.
 *
 * Depends on: CARDS, LOCS, EMOJI, getMissionColor
 * Called by:  detail.js (showDetail triggers openRightPanel)
 */

const rightPanel = document.getElementById('right-panel');
const rpBody     = document.getElementById('rp-body');
const rpClose    = document.getElementById('rp-close');
const rpTitle    = document.getElementById('rp-title');

/** Open the right panel for a given location index. */
function openRightPanel(idx) {
  const loc   = LOCS[idx];
  const card  = CARDS[loc.title];

  rpTitle.textContent = loc.title;
  rightPanel.classList.remove('rp-hidden');

  if (card) {
    // Rich HTML card registered in cards.js
    rpBody.innerHTML = card;
  } else {
    // Structured fallback using loc data
    const colour = getMissionColor(loc);
    rpBody.innerHTML = `
      <div style="padding:1.5rem 0;">
        <div style="background:var(--color-background-primary); border:0.5px solid var(--color-border-tertiary); border-radius:var(--border-radius-lg); overflow:hidden;">
          <div style="background:#1a1a2e; padding:1.25rem 1.5rem; border-bottom:0.5px solid rgba(255,255,255,0.08);">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px; flex-wrap:wrap;">
              <span style="font-size:10px; font-weight:500; letter-spacing:1px; text-transform:uppercase; color:${colour}; background:${colour}20; border:0.5px solid ${colour}40; border-radius:4px; padding:2px 8px;">${loc.type}</span>
              ${loc.char ? `<span style="font-size:10px; color:rgba(255,255,255,0.4);">Character: ${loc.char}</span>` : ''}
            </div>
            <h2 style="font-size:20px; font-weight:500; color:#fff; margin:0 0 6px; letter-spacing:-0.3px;">${loc.title}</h2>
            <p style="font-size:13px; color:rgba(255,255,255,0.5); margin:0; line-height:1.5;">${loc.desc || 'No description available.'}</p>
          </div>
          <div style="padding:1.25rem 1.5rem;">
            <div style="background:rgba(247,201,72,0.06); border:0.5px solid rgba(247,201,72,0.2); border-radius:8px; padding:10px 12px;">
              <p style="font-size:12px; color:var(--color-text-secondary); margin:0; line-height:1.5;">📝 No detailed card has been added for this location yet. Cards will be added progressively.</p>
            </div>
          </div>
        </div>
      </div>`;
  }

  // Force Leaflet to recalculate now that map area changed width
  setTimeout(() => map.invalidateSize(), 310);
}

/** Close the right panel. */
function closeRightPanel() {
  rightPanel.classList.add('rp-hidden');
  rpBody.innerHTML = '';
  setTimeout(() => map.invalidateSize(), 310);
}

rpClose.addEventListener('click', closeRightPanel);
