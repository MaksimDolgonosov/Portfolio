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

    // отправка формы
    const forms = document.querySelectorAll("form");

    forms.forEach(form => postData(form));

    function postData(form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            const request = new XMLHttpRequest();
            request.open("POST", "mailer/smart.php");
            const formData = new FormData(form);
            request.send(formData);
            request.addEventListener("load", () => {
                console.log(request.status);
                console.log(formData);
                if (request.status == 200) {
                    form.reset();

                    // document.querySelector('#thanks').style.display = "block";
                    // setTimeout(() => {
                    //     document.querySelectorAll('.modal').forEach(modal => {
                    //         document.querySelector(".overlay").style.display = "none";
                    //         modal.style.display = "none";
                    //         document.body.style.overflow = "";
                    //     });
                    // }, 2000);
                }

            });
        });
    }




    // $('form').submit(function (e) {
    //     e.preventDefault();
    //     console.log($(this).serialize());
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()

    //     }

    //     ).done(function () {

    //         $(this).find("input").val("");
    //         $('#consultation, #order').fadeOut();
    //         $('.overlay, #thanks').fadeIn('slow');

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });






});