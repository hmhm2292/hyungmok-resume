var dark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log({ dark });

var element = document.body;
var toggle = document.getElementById("toggle");
var toggleLabel = document.getElementById("toggleLabel");

if (dark) {
  console.log("dark");
  toggle.checked = true;
  toggleDarkMode();
}

toggle.onclick = toggleDarkMode;

function toggleDarkMode() {
  if (toggle.checked) {
    element.classList.add("dark-mode");
    toggleLabel.innerText = "Light";
  } else {
    element.classList.remove("dark-mode");
    toggleLabel.innerText = "Dark";
  }
}
