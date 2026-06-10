/**
 * src/js/main.js
 *
 * Application entry point.
 *
 * At this point all other modules have already loaded (data, map, markers,
 * detail, tree, search). This file handles only the shared state that needs
 * to be initialised once all modules are ready.
 *
 * Shared mutable state initialised here:
 *   doneSet  {Set<number>}  – indices of completed locations (from storage.js)
 *
 * Progress update helpers called by tree.js and this file:
 *   updateProgress()
 */

// Load persisted completion state
const doneSet = loadDone();

/**
 * Recalculate and render the progress bar and counter.
 * Called whenever doneSet changes.
 */
function updateProgress() {
  const total = LOCS.length;
  const done  = doneSet.size;

  document.getElementById('prog-text').textContent = `${done} / ${total}`;

  const pct = total ? `${(done / total) * 100}%` : '0%';
  document.getElementById('prog-fill').style.width = pct;

  document.getElementById('prog-fill').parentElement
    .setAttribute('aria-valuenow', total ? Math.round((done / total) * 100) : 0);
}

// Render initial progress state
updateProgress();
