const header = document.querySelector("header");
const sectionOne = document.querySelector(".section_home");

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

var hiddenBox = $(".hidden_top");
$(".top").on("click", function (event) {
  hiddenBox.show();
});
