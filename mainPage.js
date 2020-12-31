const header = document.querySelector(".header");
const sectionOne = document.querySelector(".home_title_top");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(
  (entries, sectionOneObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("dark");
      } else {
        header.classList.remove("dark");
      }
    });
  },
  sectionOneOptions
);

sectionOneObserver.observe(sectionOne);
