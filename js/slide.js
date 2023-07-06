const img = document.querySelector("#first");
const img2 = document.querySelector("#secound");
const img3 = document.querySelector("#third");
const img4 = document.querySelector("#fourth");


window.addEventListener("scroll", function () {
  if (window.scrollY > 543) {
    img.style.animationName = "fade1";
    setTimeout(() => {
      img.style.filter = "brightness(80%)";
      img.style.transform = "scale(0.6)";
    }, 500);
  } else {
    img.style.animationName = "fade1out";
    setTimeout(() => {
      img.style.filter = "brightness(1)";
      img.style.transform = "scale(1)";
    }, 500);
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 890) {
    img2.style.animationName = "fade2";
    setTimeout(() => {
      img2.style.filter = "brightness(85%)";
      img2.style.transform = "scale(0.7)";
    }, 500);
  } else {
    img2.style.animationName = "fade2out";
    setTimeout(() => {
      img2.style.filter = "brightness(1)";
      img2.style.transform = "scale(1)";
    }, 500);
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 1320) {
    img3.style.animationName = "fade3";
    setTimeout(() => {
      img3.style.filter = "brightness(90%)";
      img3.style.transform = "scale(0.8)";
    }, 500);
  } else {
    img3.style.animationName = "fade3out";
    setTimeout(() => {
      img3.style.filter = "brightness(1)";
      img3.style.transform = "scale(1)";
    }, 500);
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 1550) {
    img4.style.animationName = "fade4";
    setTimeout(() => {
      img4.style.transform = "scale(0.9)";
    }, 500);
  } else {
    img4.style.animationName = "fade4out";
    setTimeout(() => {
      img4.style.transform = "scale(1)";
    }, 500);
  }
});