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

function play1(a) {
  var audio = document.getElementById(`audio_play${a}`);
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}
