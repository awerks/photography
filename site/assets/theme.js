document.addEventListener("DOMContentLoaded", function () {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const html = document.documentElement
    // const themeToggle = document.querySelector("#theme-toggle");
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (theme !== "light" && prefersDarkScheme.matches)) {
        html.classList.add("dark");
        // themeToggle.checked = true;
    } else {
        html.classList.remove("dark");
        // themeToggle.checked = false;
    }

});

function switchTheme() {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
}