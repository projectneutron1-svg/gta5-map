/**
 * src/js/right-panel.js
 *
 * Right panel controller. Opens with a rich HTML card from CARDS[],
 * or a structured fallback when no card exists yet.
 *
 * Auto-opens on page load showing the Paleto Score card.
 */

const rightPanel = document.getElementById("right-panel");
const rpBody     = document.getElementById("rp-body");
const rpClose    = document.getElementById("rp-close");
const rpTitle    = document.getElementById("rp-title");

/** Render a card by location index. */
function openRightPanel(idx) {
  const loc  = LOCS[idx];
  const card = CARDS[loc.title];

  rpTitle.textContent = loc.title;
  rightPanel.classList.remove("rp-hidden");

  if (card) {
    rpBody.innerHTML = card;
  } else {
    const colour = getMissionColor(loc);
    rpBody.innerHTML = `
      <div style="padding:1.5rem 0;">
        <div style="background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:var(--border-radius-lg);overflow:hidden;">
          <div style="background:#1a1a2e;padding:1.25rem 1.5rem;border-bottom:0.5px solid rgba(255,255,255,0.08);">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap;">
              <span style="font-size:10px;font-weight:500;letter-spacing:1px;text-transform:uppercase;color:${colour};background:${colour}20;border:0.5px solid ${colour}40;border-radius:4px;padding:2px 8px;">${loc.type}</span>
              ${loc.char ? `<span style="font-size:10px;color:rgba(255,255,255,0.4);">Character: ${loc.char}</span>` : ""}
            </div>
            <h2 style="font-size:20px;font-weight:500;color:#fff;margin:0 0 6px;letter-spacing:-0.3px;">${loc.title}</h2>
            <p style="font-size:13px;color:rgba(255,255,255,0.5);margin:0;line-height:1.5;">${loc.desc || "No description available."}</p>
          </div>
          <div style="padding:1.25rem 1.5rem;">
            <div style="background:rgba(247,201,72,0.06);border:0.5px solid rgba(247,201,72,0.2);border-radius:8px;padding:10px 12px;">
              <p style="font-size:12px;color:var(--color-text-secondary);margin:0;line-height:1.5;">📝 No detailed card has been added for this location yet.</p>
            </div>
          </div>
        </div>
      </div>`;
  }

  setTimeout(() => map.invalidateSize(), 310);
}

/** Open panel by exact title string (used for default load). */
function openRightPanelByTitle(title) {
  const idx = LOCS.findIndex((l) => l.title === title);
  if (idx !== -1) openRightPanel(idx);
}

/** Close panel. */
function closeRightPanel() {
  rightPanel.classList.add("rp-hidden");
  rpBody.innerHTML = "";
  setTimeout(() => map.invalidateSize(), 310);
}

rpClose.addEventListener("click", closeRightPanel);

// ── Auto-open on page load with the Paleto Score card ────────────────────────
window.addEventListener("DOMContentLoaded", () => {
  // Small delay so map and markers finish initialising first
  setTimeout(() => openRightPanelByTitle("The Paleto Score"), 200);
});
