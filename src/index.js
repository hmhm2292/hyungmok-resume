var dark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

var element = document.body;
var toggle = document.getElementById("toggle");
toggle.onclick = toggleDarkMode;
var toggleLabel = document.getElementById("toggleLabel");

if (dark) {
  toggle.checked = true;
  toggleDarkMode();
}

function toggleDarkMode() {
  element.classList.toggle("dark-mode");
  if (toggle.checked) {
    toggleLabel.innerText = "Light";
  } else {
    toggleLabel.innerText = "Dark";
  }
}
