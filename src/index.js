var prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
var element = document.body;
var toggle = document.getElementById("toggle");

function toggleDarkMode() {
  element.classList.toggle("dark-mode");
}

if (prefersDark) {
  toggle.checked = true;
  toggleDarkMode();
}

toggle.onclick = toggleDarkMode;
