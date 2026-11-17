// Scale the 1512 x 982 design to fit any window
function fitStage() {
  const stage = document.querySelector(".stage");
  if (!stage) return;
  const s = Math.min(window.innerWidth / 1512, window.innerHeight / 982);
  stage.style.transform = "translate(-50%, -50%) scale(" + s + ")";
}
window.addEventListener("resize", fitStage);
document.addEventListener("DOMContentLoaded", fitStage);
