"use strict";

const boxes = document.querySelectorAll(".alphabets");

window.addEventListener("scroll", showBoxes);

showBoxes();

function showBoxes() {

  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("active");
    }
    else
      box.classList.remove("active");
  })
}