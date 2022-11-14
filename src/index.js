var prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
var element = document.body;
var toggle = document.getElementById("toggle");
var toggleLabel = document.getElementById("toggleLabel");

function toggleDarkMode() {
  element.classList.toggle("dark-mode");

  if (toggle.checked) {
    toggleLabel.innerText = "Light";
  } else {
    toggleLabel.innerText = "Dark";
  }
}

if (prefersDark) {
  toggle.checked = true;
  toggleDarkMode();
}

toggle.onclick = toggleDarkMode;
