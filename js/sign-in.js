// inputs
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const input = document.querySelectorAll("input");
const message = document.querySelector("span");
// forms
const loginForm = document.querySelector("#signin");
// SIGN - IN SCRIPT
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    const getUsername = localStorage.getItem("username");
    const getPassword = localStorage.getItem("password");

    if (usernameValue === getUsername && passwordValue === getPassword) {
      location.replace("index(in).html");
    } else if (usernameValue === "" || passwordValue === "") {
      message.innerText = "Username and Password are required.";
      message.classList.add("error-message");
      username.style.border = "2px solid red";
      password.style.border = "2px solid red";
    } else {
      message.innerText = "Invalid email address or password.";
      message.classList.add("error-message");
      username.style.border = "2px solid red";
      password.style.border = "2px solid red";
    }
  });
}
// Closing Signup Page
const closebutton = document.querySelector(".close-button");
closebutton.addEventListener("click", function (event) {
  event.preventDefault();

  gsap.to("body", {
    duration: 0.5,
    opacity: 0,
    onComplete: function () {
      location.replace("index.html");
    },
  });
});

// show and unshow password
const eyeIcon1 = document.getElementById("eye-icon1");
const passwordInput1 = document.getElementById("password");

eyeIcon1.addEventListener("click", () => {
  if (passwordInput1.type === "password") {
    passwordInput1.type = "text";
    eyeIcon1.classList.remove("fa-eye-slash");
    eyeIcon1.classList.add("fa-eye");
  } else {
    passwordInput1.type = "password";
    eyeIcon1.classList.remove("fa-eye");
    eyeIcon1.classList.add("fa-eye-slash");
  }
});
