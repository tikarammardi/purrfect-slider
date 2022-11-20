"use strict";

(() => {
  let SLIDE_IDX = 0;
  const leftArrow = document.querySelector("#arrow-left");
  const rightArrow = document.querySelector("#arrow-right");
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot-navigation");

  function slideShow(idx) {
    if (idx >= slides.length - 1) SLIDE_IDX = 0;
    if (idx < 0) SLIDE_IDX = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].classList.remove("active-dot");
    }

    slides[SLIDE_IDX].style.display = "block";
    dots[SLIDE_IDX].classList.add("active-dot");
  }

  leftArrow.addEventListener("click", function () {
    slideShow(--SLIDE_IDX);
  });

  rightArrow.addEventListener("click", function () {
    slideShow(++SLIDE_IDX);
  });

  dots.forEach(function (element) {
    element.addEventListener("click", function () {
      let nodes = Array.prototype.slice.call(this.parentElement.children);
      let dotIndex = nodes.indexOf(element);

      slideShow((SLIDE_IDX = dotIndex));
    });
  });

  setInterval(() => {
    slideShow(++SLIDE_IDX);
  }, 5000);
})();
