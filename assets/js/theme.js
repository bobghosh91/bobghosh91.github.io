// assets/js/theme.js
const toggleBtn = document.getElementById("mode-toggle");
const html = document.documentElement;

// Load saved theme
if (localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

// Toggle on click
toggleBtn.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});
