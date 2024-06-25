const carousel = document.querySelector(".carouselx");
const slides = document.querySelectorAll(".slidex");
const controlLinks = document.querySelectorAll(".controlsx a");

let i = 0,
  j = 1,
  intervalId;

const intervalFn = () => {
  intervalId = setInterval(() => {
    carousel.style.rotate = `-${++i * 90}deg`;

    document.querySelector(".slidex.active").classList.remove("active");
    const activeSlide = document.querySelector(`.slidex:nth-child(${++j})`);
    activeSlide.classList.add("active");

    document.querySelector("a.active").classList.remove("active");
    const activeLink = document.querySelector(`.controlsx a:nth-child(${j})`);
    activeLink.classList.add("active");

    j === 4 && (j = 0);
  }, 4000);
};

intervalFn();

controlLinks.forEach((control) => {
  control.addEventListener("click", () => {
    clearInterval(intervalId);
    carousel.style.rotate = `-${
      (i - j + Number(control.dataset.index)) * 90
    }deg`;

    document.querySelector(".slidex.active").classList.remove("active");
    const activeSlide = document.querySelector(
      `.slidex:nth-child(${control.dataset.index})`
    );
    activeSlide.classList.add("active");

    document.querySelector("a.active").classList.remove("active");
    control.classList.add("active");
  });
});

carousel.addEventListener("mouseenter", () => {
  clearInterval(intervalId);
  console.log("Pause");
});

carousel.addEventListener("mouseleave", () => {
  intervalFn();
  console.log("Play");
});
