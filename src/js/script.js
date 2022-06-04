window.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const close = document.querySelector(".menu__close");
    const overlay = document.querySelector(".menu__overlay");

    hamburger.addEventListener("click", () => {
        menu.classList.add("active");
    });

    function closeMenu() {
        menu.classList.remove("active");
    }
    close.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
});