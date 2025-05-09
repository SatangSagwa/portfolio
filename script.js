document.addEventListener("DOMContentLoaded", function () {
  /* FIND THEME SWAP CONSTANTS*/
  const themeButton = document.querySelector(".theme");
  const gitLogo = document.querySelector(".git-img");
  const profileImgOne = document.querySelector(".profile-one img");
  const profileImgTwo = document.querySelector(".profile-two img");

  /* Gets last theme */
  const savedTheme = localStorage.getItem("theme");
  
  /* THEME SWAP LOGIC */
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
      loadTheme("dark");
    } else {
      document.body.classList.remove("dark-theme");
      loadTheme("light");
    }
  
    /* Toggle theme with button click event */
    themeButton?.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
  
      if (document.body.classList.contains("dark-theme")) {
        loadTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        loadTheme("light");
        localStorage.setItem("theme", "light");
      }
    });
  
    /* Sets text and sources depending on theme. */
    function loadTheme(theme) {
      if (theme === "dark") {
        themeButton.textContent = "Light";
        gitLogo.src = "https://i.ibb.co/3mDLS9RZ/Github.png";
        profileImgOne.src = "https://i.ibb.co/h1WkCv8L/1-A7-CB5-C2-59-DA-4048-B105-769267-CF5357-1-2-2.png";
        profileImgTwo.src = "https://i.ibb.co/vrQrpsJ/1-A7-CB5-C2-59-DA-4048-B105-769267-CF5357-1-2-4.png";
      } else {
        themeButton.textContent = "Dark";
        gitLogo.src = "https://i.ibb.co/pjcJ5BYk/Github-2.png";
        profileImgOne.src = "https://i.ibb.co/GfKQkDG8/1-A7-CB5-C2-59-DA-4048-B105-769267-CF5357-1-2.png";
        profileImgTwo.src = "https://i.ibb.co/CpcKFS2B/1-A7-CB5-C2-59-DA-4048-B105-769267-CF5357-1-2-1.png";
      }
    }
  

  /* Scroll into view on click */
  document.querySelector(".scroll-btn").addEventListener("click", function () {
    document.querySelector(".introScroll").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector(".about-btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".introScroll").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector(".skills-btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".skillsScroll").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector(".get-in-touch").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".contactScroll").scrollIntoView({ behavior: "smooth" });
  });

  /* GIT BTN - opens link in new window */
  document.querySelector(".git").addEventListener("click", function () {
    window.open("https://github.com/satangsagwa", "_blank");
  });

  /* FIND SUBMIT FORM CONSTANTS */
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const submitBtn = document.getElementById("submitBtn");
  const response = document.getElementById("response");

  /* Checks for click on submit/send */
  submitBtn.addEventListener("click", function () {
    if (validateForm()) {
      form.reset();
      popupResponse();
    }
  });

  /* Response message for 7 sec */
  function popupResponse() {
    response.style.display = "block";
    setTimeout(() => {
      response.style.display = "none";
    }, 7000);
  }

  /* Validating user input */
  function validateForm() {
    let isValid = true;

    // validate name
    if (nameInput.value.trim() === "") {
      showError("name-error");
      isValid = false;
    } else {
      hideError("name-error");
    }

    // validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      showError("email-error");
      isValid = false;
    } else {
      hideError("email-error");
    }

    // validate message
    if (messageInput.value.trim() === "") {
      showError("message-error");
      isValid = false;
    } else {
      hideError("message-error");
    }

    return isValid;
  }

  /* show/hide error message */
  function showError(error) {
    const errorText = document.getElementById(error);
    errorText.style.display = "block";
  }

  function hideError(error) {
    const errorText = document.getElementById(error);
    errorText.style.display = "none";
  }
});