document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("themeSwitcher");

    // Load theme from localStorage
    const currentTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-bs-theme", currentTheme);
    updateButtonText(currentTheme);

    button.addEventListener("click", function() {
        const currentTheme = document.body.getAttribute("data-bs-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        // Update the theme
        document.body.setAttribute("data-bs-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateButtonText(newTheme);
    });

    function updateButtonText(theme) {
        if (theme === "dark") {
            button.textContent = "To Light Theme";
        } else {
            button.textContent = "To Dark Theme";
        }
    }
});
