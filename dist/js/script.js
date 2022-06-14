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


    const usagePercents = document.querySelectorAll(".usage__wrapper-perc");
    const subLine = document.querySelectorAll(".usage__wrapper-line-subline");

    usagePercents.forEach((item, i) => {
        subLine[i].style.width = item.innerHTML;
    });


    const social = document.querySelector(".sidepanel__text");
    const divider = document.querySelector(".sidepanel__divider");
    const socialSvg = document.querySelectorAll(".sidepanel__link svg path");




    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop >= 480) {
            social.classList.add("mainColToSocial");
            divider.classList.add("mainColToDivider");
            socialSvg.forEach(el => {
                el.classList.add("mainColToSocialLink");
            });
        } else {
            social.classList.remove("mainColToSocial");
            divider.classList.remove("mainColToDivider");
            socialSvg.forEach(el => {
                el.classList.remove("mainColToSocialLink");
            });
        }
    });





});