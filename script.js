/* SCROLL NAV BUTTONS */
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


/* THEME SWAP */
const themeButton = document.querySelector(".theme");
const gitLogo = document.querySelector(".git-img");

themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeButton.textContent = "Light";
    gitLogo.src = "https://i.ibb.co/3mDLS9RZ/Github.png";
  } else {
    themeButton.textContent = "Dark";
    gitLogo.src = "https://i.ibb.co/fdkPtJK3/Github-1.png";
  }
});

/* HIDE MENU */
