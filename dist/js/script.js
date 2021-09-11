window.addEventListener("DOMContentLoaded", function () {
  let pageUp = document.querySelector(".pageUp");

  window.addEventListener("scroll", function () {
    let scrollH = window.pageYOffset;
    let w = document.documentElement.clientWidth;
    if (scrollH > 900 && w > 576) {
      pageUp.style.display = "block";
    } else {
      pageUp.style.display = "none";
    }
  });

  let wrapper = document.querySelector(".expert__wrapper");
  let items = document.querySelectorAll(".expert__item");
  let info = document.querySelectorAll(".expert__info");
  let text = document.querySelectorAll(".expert__text");

  wrapper.addEventListener("click", function (event) {
    let target = event.target;
    if (target && target.classList.contains("expert__item")) {
      for (let i = 0; i < items.length; i++) {
        if (target == items[i]) {
          items[i].classList.toggle("expert__item_active");
          info[i].classList.toggle("expert__info_active");
          text[i].classList.toggle("expert__text_active");
        }
      }
    }
  });
});
