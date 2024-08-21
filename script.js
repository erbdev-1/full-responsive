const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
// console.log(movieLists);

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  // console.log(imageItem);

  arrow.addEventListener("click", function () {
    const widthRatio = Math.floor(window.innerWidth / 300);
    clickCounter++;
    if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
      // arrow.style.background = "red";
      // console.log(i);
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
  // console.log(window.innerWidth);
});

/* Dark Mode  */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select"
);

ball.addEventListener("click", function () {
  // console.log("click");
  items.forEach((item) => item.classList.toggle("active"));
});
