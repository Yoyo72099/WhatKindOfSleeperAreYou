// The background fills the whole window; the content (.frame, designed at
// 1512 x 982) is scaled to fit and centered.
function fitStage() {
  const stage = document.querySelector(".stage");
  const frame = document.querySelector(".frame");
  if (!stage || !frame) return;
  const s = Math.min(window.innerWidth / 1512, window.innerHeight / 982);
  frame.style.transform = "translate(-50%, -50%) scale(" + s + ")";
  stage.style.setProperty("--s", s);
}
window.addEventListener("resize", fitStage);
document.addEventListener("DOMContentLoaded", fitStage);
