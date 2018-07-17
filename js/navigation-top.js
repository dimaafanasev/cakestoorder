var sectionMenu = document.querySelector(".navigation__section-menu");
var navigationList = document.querySelector("#navigation-list");
var navigationButton = document.querySelector(".navigation__button");

sectionMenu.classList.add("navigation__section-menu_hidden");
if(window.screen.width <= 1366) {
    navigationList.classList.add("navigation__list_js_true");
}
navigationButton.classList.remove("navigation__button_hidden");
navigationButton.addEventListener("click", function(e) {
    e.preventDefault();
    sectionMenu.classList.toggle("navigation__section-menu_hidden");
});
