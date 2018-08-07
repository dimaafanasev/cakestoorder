"use strict";
var sliderItems = 0;
var buttonPrev = document.querySelector(".arrow__prev");
var buttonNext = document.querySelector(".arrow__next");
var slyderImagesAll = document.querySelectorAll(".ind-order__sl-image");
var sliderPagination = document.querySelectorAll(".pagination__item");
var sliderTextBlock = document.querySelectorAll(".ind-order__filling-block-item");

buttonPrev.addEventListener("click", clickButtonPrev);
buttonNext.addEventListener("click", clickButtonNext);

function clickButtonPrev() {
    if(sliderItems === 0) {
        sliderItems = 4;
        sliderPagination[0].classList.remove("pagination__item_active");
        sliderPagination[4].classList.add("pagination__item_active");
        slyderImagesAll[0].classList.remove("ind-order__sl-image_show");
        slyderImagesAll[4].classList.add("ind-order__sl-image_show");
        sliderTextBlock[0].classList.remove("ind-order__filling-block-item_show");
        sliderTextBlock[4].classList.add("ind-order__filling-block-item_show");
        return 1;
    }
    sliderTextBlock[sliderItems].classList.remove("ind-order__filling-block-item_show");
    sliderPagination[sliderItems].classList.remove("pagination__item_active");
    slyderImagesAll[sliderItems].classList.remove("ind-order__sl-image_show");
    sliderItems -= 1;
    sliderTextBlock[sliderItems].classList.add("ind-order__filling-block-item_show");
    slyderImagesAll[sliderItems].classList.add("ind-order__sl-image_show");
    sliderPagination[sliderItems].classList.add("pagination__item_active");
}

function clickButtonNext() {
    if(sliderItems === 4) {
        sliderItems = 0;
        sliderPagination[4].classList.remove("pagination__item_active");
        sliderPagination[0].classList.add("pagination__item_active");
        slyderImagesAll[4].classList.remove("ind-order__sl-image_show");
        slyderImagesAll[0].classList.add("ind-order__sl-image_show");
        sliderTextBlock[4].classList.remove("ind-order__filling-block-item_show");
        sliderTextBlock[0].classList.add("ind-order__filling-block-item_show");
        return 1;
    }
    sliderTextBlock[sliderItems].classList.remove("ind-order__filling-block-item_show");
    sliderPagination[sliderItems].classList.remove("pagination__item_active");
    slyderImagesAll[sliderItems].classList.remove("ind-order__sl-image_show");
    sliderItems += 1;
    slyderImagesAll[sliderItems].classList.add("ind-order__sl-image_show");
    sliderPagination[sliderItems].classList.add("pagination__item_active");
    sliderTextBlock[sliderItems].classList.add("ind-order__filling-block-item_show");
}
