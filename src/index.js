var prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
var element = document.body;
var outerHtml = document.documentElement;
var toggle = document.getElementById("toggle");
var intro = document.getElementById("intro");

function toggleDarkMode() {
  element.classList.toggle("dark-mode");
  outerHtml.classList.toggle("dark-mode");
}

if (prefersDark) {
  toggle.checked = true;
  toggleDarkMode();
}

function getYear() {
  const diff = new Date().getYear() - new Date("2020-01-20").getYear();
  return diff + 1;
}

toggle.onclick = toggleDarkMode;
const withYear = intro.textContent.replace("N", getYear());

intro.textContent = withYear;
