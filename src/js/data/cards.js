/**
 * src/js/data/cards.js
 *
 * Rich info card registry.
 * Key = exact location title matching LOCS[].title
 * Value = HTML string rendered inside the right panel.
 *
 * Cards use CSS variables defined in right-panel.css:
 *   --color-background-primary / -secondary / -tertiary
 *   --color-border-tertiary / -secondary
 *   --color-text-primary / -secondary
 *   --border-radius-lg
 *
 * To add a new card: CARDS["Exact Mission Title"] = `...html...`;
 */

/* global CARDS */
const CARDS = {};

// ── The Paleto Score ─────────────────────────────────────────────────────────
CARDS["The Paleto Score"] = `
<div style="max-width:680px; padding:1.5rem 0;">
<div style="background:var(--color-background-primary); border:0.5px solid var(--color-border-tertiary); border-radius:var(--border-radius-lg); overflow:hidden;">

  <div style="background:#1a1a2e; padding:1.5rem 1.5rem 1rem; border-bottom:0.5px solid rgba(255,255,255,0.08);">
    <div style="display:flex; align-items:flex-start; gap:12px;">
      <div style="background:rgba(247,201,72,0.15); border:0.5px solid rgba(247,201,72,0.3); border-radius:8px; padding:8px 10px; flex-shrink:0;">
        <i class="ti ti-building-bank" style="font-size:22px; color:#f7c948;" aria-hidden="true"></i>
      </div>
      <div style="flex:1;">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <span style="font-size:10px; font-weight:500; letter-spacing:1px; text-transform:uppercase; color:#f7c948; background:rgba(247,201,72,0.12); border:0.5px solid rgba(247,201,72,0.25); border-radius:4px; padding:2px 8px;">Story Heist</span>
          <span style="font-size:10px; color:rgba(255,255,255,0.4);">Chapter 35</span>
        </div>
        <h2 style="font-size:22px; font-weight:500; color:#fff; margin:6px 0 4px; letter-spacing:-0.3px;">The Paleto Score</h2>
        <p style="font-size:13px; color:rgba(255,255,255,0.5); margin:0; line-height:1.5;">A full military response for a small-town bank. The biggest score before the finale — and the messiest.</p>
      </div>
    </div>
  </div>

  <div style="padding:1.25rem 1.5rem; border-bottom:0.5px solid var(--color-border-tertiary);">
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:10px;">
      <div style="background:var(--color-background-secondary); border-radius:8px; padding:12px; text-align:center;">
        <div style="font-size:11px; color:var(--color-text-secondary); margin-bottom:4px;">Max payout</div>
        <div style="font-size:20px; font-weight:500; color:#4ade80;">$8.01M</div>
        <div style="font-size:10px; color:var(--color-text-secondary); margin-top:2px;">per protagonist</div>
      </div>
      <div style="background:var(--color-background-secondary); border-radius:8px; padding:12px; text-align:center;">
        <div style="font-size:11px; color:var(--color-text-secondary); margin-bottom:4px;">Wanted level</div>
        <div style="font-size:20px; font-weight:500; color:#f43f5e;">⭐⭐⭐⭐⭐</div>
        <div style="font-size:10px; color:var(--color-text-secondary); margin-top:2px;">Military deployed</div>
      </div>
      <div style="background:var(--color-background-secondary); border-radius:8px; padding:12px; text-align:center;">
        <div style="font-size:11px; color:var(--color-text-secondary); margin-bottom:4px;">Location</div>
        <div style="font-size:14px; font-weight:500; color:var(--color-text-primary);">Paleto Bay</div>
        <div style="font-size:10px; color:var(--color-text-secondary); margin-top:2px;">Blaine County bank</div>
      </div>
    </div>
  </div>

  <div style="padding:1.25rem 1.5rem; border-bottom:0.5px solid var(--color-border-tertiary);">
    <div style="font-size:11px; font-weight:500; letter-spacing:0.6px; text-transform:uppercase; color:var(--color-text-secondary); margin-bottom:12px;">Crew</div>
    <div style="display:flex; flex-direction:column; gap:8px;">
      <div style="display:flex; align-items:center; gap:10px; padding:10px; background:var(--color-background-secondary); border-radius:8px;">
        <div style="width:36px; height:36px; border-radius:50%; background:#3b82f6; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:500; color:#fff; flex-shrink:0;">M</div>
        <div style="flex:1;">
          <div style="font-size:13px; font-weight:500; color:var(--color-text-primary);">Michael De Santa</div>
          <div style="font-size:11px; color:var(--color-text-secondary);">Planner &amp; inside shooter</div>
        </div>
        <span style="font-size:10px; background:#3b82f620; color:#60a5fa; border-radius:4px; padding:2px 7px; border:0.5px solid #3b82f640;">Protagonist</span>
      </div>
      <div style="display:flex; align-items:center; gap:10px; padding:10px; background:var(--color-background-secondary); border-radius:8px;">
        <div style="width:36px; height:36px; border-radius:50%; background:#f97316; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:500; color:#fff; flex-shrink:0;">T</div>
        <div style="flex:1;">
          <div style="font-size:13px; font-weight:500; color:var(--color-text-primary);">Trevor Philips</div>
          <div style="font-size:11px; color:var(--color-text-secondary);">Heavy weapons, crowd control</div>
        </div>
        <span style="font-size:10px; background:#f9731620; color:#fb923c; border-radius:4px; padding:2px 7px; border:0.5px solid #f9731640;">Protagonist</span>
      </div>
      <div style="display:flex; align-items:center; gap:10px; padding:10px; background:var(--color-background-secondary); border-radius:8px;">
        <div style="width:36px; height:36px; border-radius:50%; background:#10b981; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:500; color:#fff; flex-shrink:0;">F</div>
        <div style="flex:1;">
          <div style="font-size:13px; font-weight:500; color:var(--color-text-primary);">Franklin Clinton</div>
          <div style="font-size:11px; color:var(--color-text-secondary);">Driver &amp; support shooter</div>
        </div>
        <span style="font-size:10px; background:#10b98120; color:#34d399; border-radius:4px; padding:2px 7px; border:0.5px solid #10b98140;">Protagonist</span>
      </div>
      <div style="display:flex; align-items:center; gap:10px; padding:10px; background:var(--color-background-secondary); border-radius:8px;">
        <div style="width:36px; height:36px; border-radius:50%; background:var(--color-background-tertiary); border:0.5px solid var(--color-border-secondary); display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:500; color:var(--color-text-secondary); flex-shrink:0;">CH</div>
        <div style="flex:1;">
          <div style="font-size:13px; font-weight:500; color:var(--color-text-primary);">Chef</div>
          <div style="font-size:11px; color:var(--color-text-secondary);">Trevor's meth cook, backup gun</div>
        </div>
        <span style="font-size:10px; background:var(--color-background-tertiary); color:var(--color-text-secondary); border-radius:4px; padding:2px 7px; border:0.5px solid var(--color-border-secondary);">NPC crew</span>
      </div>
      <div style="display:flex; align-items:center; gap:10px; padding:10px; background:var(--color-background-secondary); border-radius:8px;">
        <div style="width:36px; height:36px; border-radius:50%; background:var(--color-background-tertiary); border:0.5px solid var(--color-border-secondary); display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:500; color:var(--color-text-secondary); flex-shrink:0;">DV</div>
        <div style="flex:1;">
          <div style="font-size:13px; font-weight:500; color:var(--color-text-primary);">Daryl Johns (optional)</div>
          <div style="font-size:11px; color:var(--color-text-secondary);">Replaceable 4th gunman — takes a cut</div>
        </div>
        <span style="font-size:10px; background:var(--color-background-tertiary); color:var(--color-text-secondary); border-radius:4px; padding:2px 7px; border:0.5px solid var(--color-border-secondary);">Hired gun</span>
      </div>
    </div>
  </div>

  <div style="padding:1.25rem 1.5rem; border-bottom:0.5px solid var(--color-border-tertiary);">
    <div style="font-size:11px; font-weight:500; letter-spacing:0.6px; text-transform:uppercase; color:var(--color-text-secondary); margin-bottom:12px;">Why it happened</div>
    <div style="display:flex; flex-direction:column; gap:6px;">
      <div style="display:flex; gap:10px; align-items:flex-start;">
        <div style="width:22px; height:22px; border-radius:50%; background:rgba(247,201,72,0.12); border:0.5px solid rgba(247,201,72,0.3); display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">
          <span style="font-size:10px; font-weight:500; color:#f7c948;">1</span>
        </div>
        <p style="font-size:13px; color:var(--color-text-primary); margin:0; line-height:1.6;">The FIB demanded Trevor fund their black ops. Agent Steve Haines needed money laundered through a legitimate heist to cover his activities — and threatened Trevor's freedom to get it.</p>
      </div>
      <div style="display:flex; gap:10px; align-items:flex-start;">
        <div style="width:22px; height:22px; border-radius:50%; background:rgba(247,201,72,0.12); border:0.5px solid rgba(247,201,72,0.3); display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">
          <span style="font-size:10px; font-weight:500; color:#f7c948;">2</span>
        </div>
        <p style="font-size:13px; color:var(--color-text-primary); margin:0; line-height:1.6;">Michael needed a large cash injection — his legal fees, debts to the Madrazo cartel, and crumbling family finances made a major score unavoidable.</p>
      </div>
      <div style="display:flex; gap:10px; align-items:flex-start;">
        <div style="width:22px; height:22px; border-radius:50%; background:rgba(247,201,72,0.12); border:0.5px solid rgba(247,201,72,0.3); display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">
          <span style="font-size:10px; font-weight:500; color:#f7c948;">3</span>
        </div>
        <p style="font-size:13px; color:var(--color-text-primary); margin:0; line-height:1.6;">Paleto Bay was chosen because the bank's remote location and small local police force meant time before a serious response — even if that response eventually became the entire US Army.</p>
      </div>
    </div>
  </div>

  <div style="padding:1.25rem 1.5rem; border-bottom:0.5px solid var(--color-border-tertiary);">
    <div style="font-size:11px; font-weight:500; letter-spacing:0.6px; text-transform:uppercase; color:var(--color-text-secondary); margin-bottom:12px;">Mission flow</div>
    <div style="display:flex; flex-direction:column; gap:0;">
      <div style="display:flex; gap:12px;">
        <div style="display:flex; flex-direction:column; align-items:center;">
          <div style="width:8px; height:8px; border-radius:50%; background:#f7c948; flex-shrink:0; margin-top:4px;"></div>
          <div style="width:1px; flex:1; background:var(--color-border-tertiary); margin:3px 0;"></div>
        </div>
        <p style="font-size:13px; color:var(--color-text-primary); margin:0 0 10px; line-height:1.5;">Enter the bank. Michael and crew hold the vault staff at gunpoint while the vault door is drilled open.</p>
      </div>
      <div style="display:flex; gap:12px;">
        <div style="display:flex; flex-direction:column; align-items:center;">
          <div style="width:8px; height:8px; border-radius:50%; background:#f7c948; flex-shrink:0; margin-top:4px;"></div>
          <div style="width:1px; flex:1; background:var(--color-border-tertiary); margin:3px 0;"></div>
        </div>
        <p style="font-size:13px; color:var(--color-text-primary); margin:0 0 10px; line-height:1.5;">Police arrive immediately — the crew fights through them. Then NOOSE, then Merryweather, then the National Guard with helicopters and armoured vehicles on the Pacific Highway escape.</p>
      </div>
      <div style="display:flex; gap:12px;">
        <div style="display:flex; flex-direction:column; align-items:center;">
          <div style="width:8px; height:8px; border-radius:50%; background:#f7c948; flex-shrink:0; margin-top:4px;"></div>
          <div style="width:1px; flex:1; background:var(--color-border-tertiary); margin:3px 0;"></div>
        </div>
        <p style="font-size:13px; color:var(--color-text-primary); margin:0 0 10px; line-height:1.5;">Escape south down the coastal highway, running the gauntlet through Army roadblocks — the military hardware stolen in the setup mission becomes essential here.</p>
      </div>
      <div style="display:flex; gap:12px;">
        <div style="display:flex; flex-direction:column; align-items:center;">
          <div style="width:8px; height:8px; border-radius:50%; background:#34d399; flex-shrink:0; margin-top:4px;"></div>
        </div>
        <p style="font-size:13px; color:var(--color-text-primary); margin:0; line-height:1.5;">Reach the railway tunnel to lose the wanted level. Cut proceeds. Lester skims his percentage — Michael, Trevor, and Franklin split the remainder.</p>
      </div>
    </div>
  </div>

  <div style="padding:1.25rem 1.5rem;">
    <div style="font-size:11px; font-weight:500; letter-spacing:0.6px; text-transform:uppercase; color:var(--color-text-secondary); margin-bottom:10px;">Money breakdown (optimal play)</div>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px,1fr)); gap:8px; margin-bottom:14px;">
      <div style="padding:10px; background:var(--color-background-secondary); border-radius:8px; text-align:center;">
        <div style="font-size:11px; color:var(--color-text-secondary); margin-bottom:3px;">Gross take</div>
        <div style="font-size:16px; font-weight:500; color:var(--color-text-primary);">$8,016,020</div>
      </div>
      <div style="padding:10px; background:var(--color-background-secondary); border-radius:8px; text-align:center;">
        <div style="font-size:11px; color:var(--color-text-secondary); margin-bottom:3px;">Lester's cut</div>
        <div style="font-size:16px; font-weight:500; color:#f43f5e;">−$100,000</div>
      </div>
      <div style="padding:10px; background:var(--color-background-secondary); border-radius:8px; text-align:center;">
        <div style="font-size:11px; color:var(--color-text-secondary); margin-bottom:3px;">Each protagonist nets</div>
        <div style="font-size:16px; font-weight:500; color:#4ade80;">~$2.63M</div>
      </div>
    </div>
    <div style="background:rgba(247,201,72,0.06); border:0.5px solid rgba(247,201,72,0.2); border-radius:8px; padding:10px 12px;">
      <p style="font-size:12px; color:var(--color-text-secondary); margin:0; line-height:1.5;">💡 This is a setup mission for the Union Depository — the real payoff comes in The Big Score. The Paleto Score also reveals to Trevor the full picture of the 2004 North Yankton betrayal.</p>
    </div>
  </div>

</div>
</div>
`;
