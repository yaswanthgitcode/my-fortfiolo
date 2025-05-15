document.addEventListener("DOMContentLoaded", function () {
    const Hamburger = document.querySelector(".hamburger");
    const menu_bar = document.querySelector(".navbar-menu .manu-bar");

    Hamburger.addEventListener("click", () => {
        menu_bar.classList.toggle("show");
    });
});
