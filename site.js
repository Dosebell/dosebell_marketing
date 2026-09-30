"use strict";
const take = document.getElementById("demo-take");
const snooze = document.getElementById("demo-snooze");
const skip = document.getElementById("demo-skip");
const label = document.getElementById("preview-label");
const progress = document.getElementById("preview-progress");
const message = document.getElementById("preview-message");
function showAction(action) {
  const taken = action === "taken";
  label.textContent = taken
    ? "Dose recorded"
    : action === "snoozed"
      ? "Snoozed until 8:10 am"
      : "Dose skipped";
  progress.textContent = taken
    ? "2 of 3 recorded as taken"
    : "1 of 3 recorded as taken";
  take.textContent = taken
    ? "Recorded as taken ✓"
    : action === "snoozed"
      ? "I've taken this dose ✓"
      : "Recorded as skipped";
  take.disabled = action !== "snoozed";
  snooze.disabled = action !== "snoozed";
  skip.disabled = action !== "snoozed";
  message.textContent = taken
    ? "A clear record, so you can get on with your day. Preview only."
    : action === "snoozed"
      ? "The reminder moves; the prescribed time stays the same. Preview only."
      : "Skipped doses stay in your history. Preview only.";
}
take.addEventListener("click", () => showAction("taken"));
snooze.addEventListener("click", () => showAction("snoozed"));
skip.addEventListener("click", () => showAction("skipped"));
document.getElementById("demo-reset").addEventListener("click", () => {
  label.textContent = "Ready when you are";
  progress.textContent = "1 of 3 recorded as taken";
  take.textContent = "I've taken this dose ✓";
  take.disabled = false;
  snooze.disabled = false;
  skip.disabled = false;
  message.textContent = "Try a dose action. This is an illustrative preview.";
});
