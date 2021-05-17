function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.key}"]`);
  const key = document.querySelector(`.key[data-key="${event.key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition() {
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
