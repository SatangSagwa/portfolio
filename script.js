document.querySelector(".scroll-btn").addEventListener("click", function () {
  document.querySelector(".introScroll").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".about-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".introScroll").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".skills-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document
    .querySelector(".skillsScroll")
    .scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".get-in-touch").addEventListener("click", function (e) {
  e.preventDefault();
  document
    .querySelector(".contactScroll")
    .scrollIntoView({ behavior: "smooth" });
});
