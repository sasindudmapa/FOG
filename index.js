/** @format */

//fixed navigation bar hadle when scrolling
document.addEventListener("scroll", () => {
  if (scrollY <= 100) {
    document
      .getElementsByClassName("header-bottom")[0]
      .classList.remove("scroll-fixed");
  } else {
    document
      .getElementsByClassName("header-bottom")[0]
      .classList.add("scroll-fixed");
  }
});

//sldier click
let leftArrow = document.getElementsByClassName("left-arrow");
let rightArrow = document.getElementsByClassName("right-arrow");
let slide = document.getElementsByClassName("slider");

for (let i = 0; i < leftArrow.length; i++) {
  leftArrow[i].addEventListener("click", () => {
    console.log("clicked");
    slide[i].scrollBy({
      top: 0,
      left: -500,
      behavior: "smooth",
    });
  });

  rightArrow[i].addEventListener("click", () => {
    slide[i].scrollBy({
      top: 0,
      left: +500,
      behavior: "smooth",
    });
  });
}
