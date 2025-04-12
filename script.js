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

/* SUBMIT FORM */
document.addEventListener("DOMContentLoaded", function () {
  function visualizeDom() {
    domVisElement.textContent("DOM visualization");
    bodyElement.appendChild(domVisElement);

    console.log("DOM visualization");
  }

  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const submitBtn = document.getElementById("submitBtn");
  const response = document.getElementById("response");

  submitBtn.addEventListener("click", function () {
    console.log("Custom button clicked");
    if (validateForm()) {
      console.log("Form is valid. Submitting...");
      form.reset();
      popupResponse();
    }
  });

  function popupResponse() {
    response.style.display = "block";
    setTimeout(() => {
      response.style.display = "none";
    }, 7000);
  }

  function validateForm() {
    let isValid = true;

    // validate name
    if (nameInput.value.trim() === "") {
      showError("name-error");
      isValid = false;
      console.log("NAME");
    } else {
      hideError("name-error");
    }

    // validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      showError("email-error");
      isValid = false;
      console.log("EMAIL");
    } else {
      hideError("email-error");
    }

    // validate message
    if (messageInput.value.trim() === "") {
      showError("message-error");
      isValid = false;
      console.log("MESSAGE");
    } else {
      hideError("message-error");
    }

    return isValid;
  }

  function showError(error) {
    const errorText = document.getElementById(error);
    errorText.style.display = "block";
  }

  function hideError(error) {
    const errorText = document.getElementById(error);
    errorText.style.display = "none";
  }
});
