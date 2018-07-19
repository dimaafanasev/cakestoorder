"use strict";
window.onload = function() {
    var checkButtonNavigation = false;
    var buttonNavigation = document.querySelector(".navigation__button");
    var menuListBlock = document.querySelector(".navigation__section-menu");
    var menuList = document.querySelector("#js-nav-list");
    var navigationSection = document.querySelector("[data-navigation]");
    buttonNavigation.classList.remove("navigation__button_hidden");
    menuListBlock.classList.add("navigation__section-menu_hidden");
    if(window.screen.width <= 1366) {
        menuList.classList.add("navigation__list_js_true");
    }
    buttonNavigation.addEventListener("click", function(e) {
        e.preventDefault();
        if (checkButtonNavigation) {
            checkButtonNavigation = false;
            menuListBlock.classList.add("navigation__section-menu_hidden");
            focusManager.release(buttonNavigation);
        } else {
            checkButtonNavigation = true;
            menuListBlock.classList.remove("navigation__section-menu_hidden");
        }
    });
    buttonNavigation.addEventListener('keydown', function(e) {
        if(e.keyCode === 13 || e.keyCode === 32) {
            if (checkButtonNavigation) {
                e.preventDefault();
                checkButtonNavigation = false;
                menuListBlock.classList.add("navigation__section-menu_hidden");
                focusManager.release(buttonNavigation);
            } else {
                e.preventDefault();
                checkButtonNavigation = true;
                menuListBlock.classList.remove("navigation__section-menu_hidden");
                focusManager.capture(navigationSection);
            }
        }
    });
    window.addEventListener("keydown", function(e) {
        if(e.keyCode === 27) {
            if (checkButtonNavigation) {
                e.preventDefault();
                checkButtonNavigation = false;
                menuListBlock.classList.add("navigation__section-menu_hidden");
                focusManager.release(buttonNavigation);
            }
        }
    });
};
