'use strict';
let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mainSlider_image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > x.length) {
    slideIndex = 1
  } x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}