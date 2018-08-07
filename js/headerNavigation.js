"use strict";
var checkButtonNavigation = false;
var buttonNavigation = document.querySelector(".navigation__button");
var menuListBlock = document.querySelector(".navigation__section-menu");
var menuList = document.querySelector("#js-nav-list");
var navigationSection = document.querySelector("[data-navigation]");

startRessetClass();

buttonNavigation.addEventListener("click", function(e) {
    toggleNavigationMenu(e, false);
});
buttonNavigation.addEventListener('keydown', function(e) {
    if(e.keyCode === 13 || e.keyCode === 32) {
        toggleNavigationMenu(e, true);
    }
});
window.addEventListener("keydown", function(e) {
    if(e.keyCode === 27) {
        toggleNavigationMenu(e, true);
    }
});

function toggleNavigationMenu(e, checkFocus) {
    if (checkButtonNavigation) {
        e.preventDefault();
        checkButtonNavigation = false;
        menuListBlock.classList.add("navigation__section-menu_hidden");
        buttonNavigation.classList.remove("navigation__button_animate");
        if (checkFocus) {
            focusManager.release(buttonNavigation);
        }
    } else {
        e.preventDefault();
        checkButtonNavigation = true;
        menuListBlock.classList.remove("navigation__section-menu_hidden");
        buttonNavigation.classList.add("navigation__button_animate");
        if (checkFocus) {
            focusManager.capture(navigationSection);
        }
    }
}
function startRessetClass() {
    buttonNavigation.classList.remove("navigation__button_hidden");
    menuListBlock.classList.add("navigation__section-menu_hidden");
    if(window.screen.width <= 1366) {
        menuList.classList.add("navigation__list_js_true");
    }
}
