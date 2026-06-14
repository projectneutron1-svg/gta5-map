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


// ── Weapon Cards ──────────────────────────────────────────────────────────────

CARDS["Pistol"] = `
<div style="max-width:680px; padding:1.5rem 0;">
<div style="background:var(--color-background-primary); border:0.5px solid var(--color-border-tertiary); border-radius:var(--border-radius-lg); overflow:hidden;">
  <div style="background:#1a1208; padding:1.5rem 1.5rem 1rem; border-bottom:0.5px solid rgba(255,255,255,0.08);">
    <div style="display:flex; align-items:flex-start; gap:12px;">
      <div style="background:rgba(255,165,0,0.15); border:0.5px solid rgba(255,165,0,0.3); border-radius:8px; padding:8px 10px; flex-shrink:0;">
        <i class="ti ti-gun" style="font-size:22px; color:#ffa500;" aria-hidden="true"></i>
      </div>
      <div style="flex:1;">
        <div style="font-size:11px; font-weight:500; letter-spacing:0.6px; text-transform:uppercase; color:#ffa500; margin-bottom:4px;">Weapons / Pistols</div>
        <h2 style="font-size:18px; font-weight:600; color:var(--color-text-primary); margin:0 0 6px;">Pistols</h2>
        <p style="font-size:13px; color:var(--color-text-secondary); margin:0; line-height:1.5;">Sidearms and handguns. Reliable, concealable, and always available as a last resort.</p>
      </div>
    </div>
  </div>
  <div style="padding:1.25rem 1.5rem;">
    <div style="font-size:11px; font-weight:500; letter-spacing:0.6px; text-transform:uppercase; color:var(--color-text-secondary); margin-bottom:10px;">All Pistols in GTA V</div>
    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(120px,1fr)); gap:10px;">
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_PISTOL.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Pistol</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_PISTOL_MK2.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Pistol Mk II</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_COMBATPISTOL.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Combat Pistol</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_APPISTOL.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">AP Pistol</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_PISTOL50.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Pistol .50</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_SNSPISTOL.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">SNS Pistol</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_SNSPISTOL_MK2.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">SNS Pistol Mk II</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_HEAVYPISTOL.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Heavy Pistol</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_VINTAGEPISTOL.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Vintage Pistol</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_FLAREGUN.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Flare Gun</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_MARKSMANPISTOL.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Marksman Pistol</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_REVOLVER.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Heavy Revolver</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_REVOLVER_MK2.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Heavy Revolver Mk II</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_DOUBLEACTION.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Double-Action Revolver</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_NAVYREVOLVER.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Navy Revolver</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_CERAMICPISTOL.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Ceramic Pistol</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_GADGETPISTOL.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Perico Pistol</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_RAYPISTOL.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Up-n-Atomizer</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_PISTOLXM3.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">WM 29 Pistol</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_STUNGUN.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Stun Gun</div></div>
    </div>
  </div>
</div>
</div>
`;

CARDS["SMG"] = `
<div style="max-width:680px; padding:1.5rem 0;">
<div style="background:var(--color-background-primary); border:0.5px solid var(--color-border-tertiary); border-radius:var(--border-radius-lg); overflow:hidden;">
  <div style="background:#0d1a12; padding:1.5rem 1.5rem 1rem; border-bottom:0.5px solid rgba(255,255,255,0.08);">
    <div style="display:flex; align-items:flex-start; gap:12px;">
      <div style="background:rgba(74,222,128,0.15); border:0.5px solid rgba(74,222,128,0.3); border-radius:8px; padding:8px 10px; flex-shrink:0;">
        <i class="ti ti-gun" style="font-size:22px; color:#4ade80;" aria-hidden="true"></i>
      </div>
      <div style="flex:1;">
        <div style="font-size:11px; font-weight:500; letter-spacing:0.6px; text-transform:uppercase; color:#4ade80; margin-bottom:4px;">Weapons / SMGs</div>
        <h2 style="font-size:18px; font-weight:600; color:var(--color-text-primary); margin:0 0 6px;">Sub-Machine Guns</h2>
        <p style="font-size:13px; color:var(--color-text-secondary); margin:0; line-height:1.5;">Fast-firing compact automatics — essential for drive-bys and close-quarters combat.</p>
      </div>
    </div>
  </div>
  <div style="padding:1.25rem 1.5rem;">
    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(120px,1fr)); gap:10px;">
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_MICROSMG.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Micro SMG</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_SMG.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">SMG</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_SMG_MK2.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">SMG Mk II</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_ASSAULTSMG.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Assault SMG</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_COMBATPDW.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Combat PDW</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_MACHINEPISTOL.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Machine Pistol</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_MINISMG.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Mini SMG</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_TECPISTOL.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Tactical SMG</div></div>
    </div>
  </div>
</div>
</div>
`;

CARDS["Shotgun"] = `
<div style="max-width:680px; padding:1.5rem 0;">
<div style="background:var(--color-background-primary); border:0.5px solid var(--color-border-tertiary); border-radius:var(--border-radius-lg); overflow:hidden;">
  <div style="background:#1a0d0d; padding:1.5rem 1.5rem 1rem; border-bottom:0.5px solid rgba(255,255,255,0.08);">
    <div style="display:flex; align-items:flex-start; gap:12px;">
      <div style="background:rgba(239,68,68,0.15); border:0.5px solid rgba(239,68,68,0.3); border-radius:8px; padding:8px 10px; flex-shrink:0;">
        <i class="ti ti-gun" style="font-size:22px; color:#ef4444;" aria-hidden="true"></i>
      </div>
      <div style="flex:1;">
        <div style="font-size:11px; font-weight:500; letter-spacing:0.6px; text-transform:uppercase; color:#ef4444; margin-bottom:4px;">Weapons / Shotguns</div>
        <h2 style="font-size:18px; font-weight:600; color:var(--color-text-primary); margin:0 0 6px;">Shotguns</h2>
        <p style="font-size:13px; color:var(--color-text-secondary); margin:0; line-height:1.5;">Devastating at close range. Wide spread, high damage — the crowd-control specialists.</p>
      </div>
    </div>
  </div>
  <div style="padding:1.25rem 1.5rem;">
    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(120px,1fr)); gap:10px;">
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_PUMPSHOTGUN.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Pump Shotgun</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_PUMPSHOTGUN_MK2.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Pump Shotgun Mk II</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_SAWNOFFSHOTGUN.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Sawed-Off Shotgun</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_ASSAULTSHOTGUN.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Assault Shotgun</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_BULLPUPSHOTGUN.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Bullpup Shotgun</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_AUTOSHOTGUN.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Sweeper Shotgun</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_HEAVYSHOTGUN.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Heavy Shotgun</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_DBSHOTGUN.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Double Barrel Shotgun</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_COMBATSHOTGUN.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Combat Shotgun</div></div>
    </div>
  </div>
</div>
</div>
`;

CARDS["Assault Rifle"] = `
<div style="max-width:680px; padding:1.5rem 0;">
<div style="background:var(--color-background-primary); border:0.5px solid var(--color-border-tertiary); border-radius:var(--border-radius-lg); overflow:hidden;">
  <div style="background:#0d1220; padding:1.5rem 1.5rem 1rem; border-bottom:0.5px solid rgba(255,255,255,0.08);">
    <div style="display:flex; align-items:flex-start; gap:12px;">
      <div style="background:rgba(96,165,250,0.15); border:0.5px solid rgba(96,165,250,0.3); border-radius:8px; padding:8px 10px; flex-shrink:0;">
        <i class="ti ti-gun" style="font-size:22px; color:#60a5fa;" aria-hidden="true"></i>
      </div>
      <div style="flex:1;">
        <div style="font-size:11px; font-weight:500; letter-spacing:0.6px; text-transform:uppercase; color:#60a5fa; margin-bottom:4px;">Weapons / Assault Rifles</div>
        <h2 style="font-size:18px; font-weight:600; color:var(--color-text-primary); margin:0 0 6px;">Assault Rifles</h2>
        <p style="font-size:13px; color:var(--color-text-secondary); margin:0; line-height:1.5;">Fully-automatic primary weapons. High capacity, long range, and the backbone of any loadout.</p>
      </div>
    </div>
  </div>
  <div style="padding:1.25rem 1.5rem;">
    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(120px,1fr)); gap:10px;">
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_ASSAULTRIFLE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Assault Rifle</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_ASSAULTRIFLE_MK2.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Assault Rifle Mk II</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_CARBINERIFLE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Carbine Rifle</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_CARBINERIFLE_MK2.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Carbine Rifle Mk II</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_ADVANCEDRIFLE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Advanced Rifle</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_SPECIALCARBINE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Special Carbine</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_SPECIALCARBINE_MK2.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Special Carbine Mk II</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_BULLPUPRIFLE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Bullpup Rifle</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_BULLPUPRIFLE_MK2.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Bullpup Rifle Mk II</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_COMPACTRIFLE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Compact Rifle</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_MILITARYRIFLE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Military Rifle</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_HEAVYRIFLE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Heavy Rifle</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_TACTICALRIFLE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Service Carbine</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_BATTLERIFLE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Battle Rifle</div></div>
    </div>
  </div>
</div>
</div>
`;

CARDS["LMG"] = `
<div style="max-width:680px; padding:1.5rem 0;">
<div style="background:var(--color-background-primary); border:0.5px solid var(--color-border-tertiary); border-radius:var(--border-radius-lg); overflow:hidden;">
  <div style="background:#1a1508; padding:1.5rem 1.5rem 1rem; border-bottom:0.5px solid rgba(255,255,255,0.08);">
    <div style="display:flex; align-items:flex-start; gap:12px;">
      <div style="background:rgba(251,191,36,0.15); border:0.5px solid rgba(251,191,36,0.3); border-radius:8px; padding:8px 10px; flex-shrink:0;">
        <i class="ti ti-gun" style="font-size:22px; color:#fbbf24;" aria-hidden="true"></i>
      </div>
      <div style="flex:1;">
        <div style="font-size:11px; font-weight:500; letter-spacing:0.6px; text-transform:uppercase; color:#fbbf24; margin-bottom:4px;">Weapons / LMGs</div>
        <h2 style="font-size:18px; font-weight:600; color:var(--color-text-primary); margin:0 0 6px;">Machine Guns & LMGs</h2>
        <p style="font-size:13px; color:var(--color-text-secondary); margin:0; line-height:1.5;">Suppressive fire and massive ammo capacity. When you need to keep heads down.</p>
      </div>
    </div>
  </div>
  <div style="padding:1.25rem 1.5rem;">
    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(120px,1fr)); gap:10px;">
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_MG.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">MG</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_COMBATMG.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Combat MG</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_COMBATMG_MK2.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Combat MG Mk II</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_GUSENBERG.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Gusenberg Sweeper</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_MINIGUN.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Minigun</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_RAYMINIGUN.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Widowmaker</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_RAYCARBINE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Unholy Hellbringer</div></div>
    </div>
  </div>
</div>
</div>
`;

CARDS["Sniper Rifle"] = `
<div style="max-width:680px; padding:1.5rem 0;">
<div style="background:var(--color-background-primary); border:0.5px solid var(--color-border-tertiary); border-radius:var(--border-radius-lg); overflow:hidden;">
  <div style="background:#0d1a1a; padding:1.5rem 1.5rem 1rem; border-bottom:0.5px solid rgba(255,255,255,0.08);">
    <div style="display:flex; align-items:flex-start; gap:12px;">
      <div style="background:rgba(34,211,238,0.15); border:0.5px solid rgba(34,211,238,0.3); border-radius:8px; padding:8px 10px; flex-shrink:0;">
        <i class="ti ti-crosshair" style="font-size:22px; color:#22d3ee;" aria-hidden="true"></i>
      </div>
      <div style="flex:1;">
        <div style="font-size:11px; font-weight:500; letter-spacing:0.6px; text-transform:uppercase; color:#22d3ee; margin-bottom:4px;">Weapons / Sniper Rifles</div>
        <h2 style="font-size:18px; font-weight:600; color:var(--color-text-primary); margin:0 0 6px;">Sniper Rifles</h2>
        <p style="font-size:13px; color:var(--color-text-secondary); margin:0; line-height:1.5;">One shot, one kill. Long-range precision weapons for taking out targets from a safe distance.</p>
      </div>
    </div>
  </div>
  <div style="padding:1.25rem 1.5rem;">
    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(120px,1fr)); gap:10px;">
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_SNIPERRIFLE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Sniper Rifle</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_HEAVYSNIPER.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Heavy Sniper</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_HEAVYSNIPER_MK2.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Heavy Sniper Mk II</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_MARKSMANRIFLE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Marksman Rifle</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_MARKSMANRIFLE_MK2.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Marksman Rifle Mk II</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_PRECISIONRIFLE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Precision Rifle</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_MUSKET.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Musket</div></div>
    </div>
  </div>
</div>
</div>
`;

CARDS["Heavy Weapon"] = `
<div style="max-width:680px; padding:1.5rem 0;">
<div style="background:var(--color-background-primary); border:0.5px solid var(--color-border-tertiary); border-radius:var(--border-radius-lg); overflow:hidden;">
  <div style="background:#1a0a08; padding:1.5rem 1.5rem 1rem; border-bottom:0.5px solid rgba(255,255,255,0.08);">
    <div style="display:flex; align-items:flex-start; gap:12px;">
      <div style="background:rgba(251,113,133,0.15); border:0.5px solid rgba(251,113,133,0.3); border-radius:8px; padding:8px 10px; flex-shrink:0;">
        <i class="ti ti-bomb" style="font-size:22px; color:#fb7185;" aria-hidden="true"></i>
      </div>
      <div style="flex:1;">
        <div style="font-size:11px; font-weight:500; letter-spacing:0.6px; text-transform:uppercase; color:#fb7185; margin-bottom:4px;">Weapons / Heavy</div>
        <h2 style="font-size:18px; font-weight:600; color:var(--color-text-primary); margin:0 0 6px;">Heavy Weapons & Launchers</h2>
        <p style="font-size:13px; color:var(--color-text-secondary); margin:0; line-height:1.5;">Explosives and launchers. For when you need to destroy vehicles, helicopters, or entire city blocks.</p>
      </div>
    </div>
  </div>
  <div style="padding:1.25rem 1.5rem;">
    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(120px,1fr)); gap:10px;">
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_RPG.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">RPG</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_GRENADELAUNCHER.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Grenade Launcher</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_COMPACTLAUNCHER.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Compact GL</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_HOMINGLAUNCHER.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Homing Launcher</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_FIREWORK.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Firework Launcher</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_RAILGUN.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Railgun</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_RAILGUNXM3.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Railgun XM3</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_GRENADELAUNCHER_SMOKE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Tear Gas Launcher</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_EMPLAUNCHER.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">EMP Launcher</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_SNOWLAUNCHER.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Snowball Launcher</div></div>
    </div>
  </div>
</div>
</div>
`;

CARDS["Thrown"] = `
<div style="max-width:680px; padding:1.5rem 0;">
<div style="background:var(--color-background-primary); border:0.5px solid var(--color-border-tertiary); border-radius:var(--border-radius-lg); overflow:hidden;">
  <div style="background:#121508; padding:1.5rem 1.5rem 1rem; border-bottom:0.5px solid rgba(255,255,255,0.08);">
    <div style="display:flex; align-items:flex-start; gap:12px;">
      <div style="background:rgba(163,230,53,0.15); border:0.5px solid rgba(163,230,53,0.3); border-radius:8px; padding:8px 10px; flex-shrink:0;">
        <i class="ti ti-circle-dotted" style="font-size:22px; color:#a3e635;" aria-hidden="true"></i>
      </div>
      <div style="flex:1;">
        <div style="font-size:11px; font-weight:500; letter-spacing:0.6px; text-transform:uppercase; color:#a3e635; margin-bottom:4px;">Weapons / Thrown</div>
        <h2 style="font-size:18px; font-weight:600; color:var(--color-text-primary); margin:0 0 6px;">Thrown Weapons</h2>
        <p style="font-size:13px; color:var(--color-text-secondary); margin:0; line-height:1.5;">Grenades, molotovs and more. Area-denial and crowd control tools.</p>
      </div>
    </div>
  </div>
  <div style="padding:1.25rem 1.5rem;">
    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(120px,1fr)); gap:10px;">
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_GRENADE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Grenade</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_STICKYBOMB.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Sticky Bomb</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_PROXMINE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Proximity Mine</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_BZGAS.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">BZ Gas</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_SMOKEGRENADE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Tear Gas</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_MOLOTOV.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Molotov</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_PIPEBOMB.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Pipe Bomb</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_FLARE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Flare</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_SNOWBALL.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Snowball</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_ACIDPACKAGE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Acid Package</div></div>
    </div>
  </div>
</div>
</div>
`;

CARDS["Melee"] = `
<div style="max-width:680px; padding:1.5rem 0;">
<div style="background:var(--color-background-primary); border:0.5px solid var(--color-border-tertiary); border-radius:var(--border-radius-lg); overflow:hidden;">
  <div style="background:#130d1a; padding:1.5rem 1.5rem 1rem; border-bottom:0.5px solid rgba(255,255,255,0.08);">
    <div style="display:flex; align-items:flex-start; gap:12px;">
      <div style="background:rgba(167,139,250,0.15); border:0.5px solid rgba(167,139,250,0.3); border-radius:8px; padding:8px 10px; flex-shrink:0;">
        <i class="ti ti-tools-kitchen-2" style="font-size:22px; color:#a78bfa;" aria-hidden="true"></i>
      </div>
      <div style="flex:1;">
        <div style="font-size:11px; font-weight:500; letter-spacing:0.6px; text-transform:uppercase; color:#a78bfa; margin-bottom:4px;">Weapons / Melee</div>
        <h2 style="font-size:18px; font-weight:600; color:var(--color-text-primary); margin:0 0 6px;">Melee Weapons</h2>
        <p style="font-size:13px; color:var(--color-text-secondary); margin:0; line-height:1.5;">Up close and personal. Blades, blunt weapons and everything in between.</p>
      </div>
    </div>
  </div>
  <div style="padding:1.25rem 1.5rem;">
    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(120px,1fr)); gap:10px;">
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_KNIFE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Knife</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_SWITCHBLADE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Switchblade</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_DAGGER.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Dagger</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_MACHETE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Machete</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_HATCHET.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Hatchet</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_BATTLEAXE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Battle Axe</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_STONE_HATCHET.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Stone Hatchet</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_BAT.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Baseball Bat</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_GOLFCLUB.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Golf Club</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_CROWBAR.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Crowbar</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_HAMMER.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Hammer</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_NIGHTSTICK.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Nightstick</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_WRENCH.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Pipe Wrench</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_POOLCUE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Pool Cue</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_FLASHLIGHT.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Flashlight</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_BOTTLE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Bottle</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_KNUCKLE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Knuckle Duster</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_CANDYCANE.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">Candy Cane</div></div>
      <div style="text-align:center; padding:10px; background:var(--color-background-secondary); border-radius:8px;"><img src="https://docs.fivem.net/weapons/WEAPON_STUNROD.png" style="width:80px;height:50px;object-fit:contain;" onerror="this.style.display='none'"><div style="font-size:11px;color:var(--color-text-primary);margin-top:6px;">The Shocker</div></div>
    </div>
  </div>
</div>
</div>
`;
