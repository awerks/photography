
const theme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
const html = document.documentElement;

if (theme == "dark") {
    html.classList.add("dark");
}
if (theme == "light") {
    html.classList.remove("dark");
}


function switchTheme() {
    const html = document.documentElement;
    html.classList.toggle("dark");
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
}