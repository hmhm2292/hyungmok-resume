var prefersDark =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
var element = document.body
var outerHtml = document.documentElement
var toggle = document.getElementById('toggle')
var header = document.getElementById('header')

function toggleDarkMode() {
  element.classList.toggle('dark-mode')
  outerHtml.classList.toggle('dark-mode')
}

if (prefersDark) {
  toggle.checked = true
  toggleDarkMode()
}

function getYear() {
  const diff = new Date().getYear() - new Date('2020-01-20').getYear()
  return diff + 1
}

toggle.onclick = toggleDarkMode
const withYear = header.textContent.replace('N', getYear())

header.textContent = withYear
