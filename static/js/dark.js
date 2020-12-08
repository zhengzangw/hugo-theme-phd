// modified from https://codepen.io/BarthyB/pen/EBzxje
document.addEventListener("DOMContentLoaded", function() {
    const app = document.querySelector(".app");
    const button = document.querySelector(".btn-switch");
    const themeName = document.querySelector(".theme-name");

    let currentTheme = "auto";
    if (!app.classList.contains("auto")) {
        let currentTheme = app.classList.contains("light") ? "light" : "dark";
    }

    button.addEventListener("click", function() {
        app.classList.remove(currentTheme);
        currentTheme = currentTheme === "light" ? "dark" : "light";
        currentThemeName = currentTheme === "light" ? "Light" : "Dark";
        app.classList.add(currentTheme);

        themeName.innerText = currentThemeName;
    });
});