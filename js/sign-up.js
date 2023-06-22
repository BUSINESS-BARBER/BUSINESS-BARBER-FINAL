// inputs
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const input = document.querySelectorAll("input");

// forms
const signupForm = document.querySelector("#signup");

// errors
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const message = document.querySelector("span");

// SIGNUP SCRIPT

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    const min = 2;

    // username validation & save
    if (usernameValue === "") {
      usernameError.innerText = "Username is required.";
      usernameError.classList.add("error");
      username.style.border = "3px solid red";
    } else if (usernameValue.length < min) {
      usernameError.innerText = "Minimum length required is 2.";
      usernameError.classList.add("error");
      username.style.border = "3px solid red";
    } else {
      localStorage.setItem("username", usernameValue);
      usernameError.innerText = "";
      username.style.border = "3px solid green";
    }

    // email validation & save
    if (emailValue === "") {
      emailError.innerText = "Email Address is required.";
      emailError.classList.add("error");
      email.style.border = "3px solid red";
    } else if (!validEmail(emailValue)) {
      emailError.innerText = "Email Address is not valid.";
      emailError.classList.add("error");
      email.style.border = "3px solid red";
    } else {
      localStorage.setItem("email", emailValue);
      emailError.innerText = "";
      email.style.border = "3px solid green";
    }

    // password validation & save
    if (passwordValue === "") {
      passwordError.innerText = "Password is required.";
      passwordError.classList.add("error");
      password.style.border = "3px solid red";
    } else if (!validPassword(passwordValue)) {
      passwordError.innerText =
        "Minimum length required is 8, at least one letter, one number, and one special character.";
      passwordError.classList.add("error");
      password.style.border = "3px solid red";
    } else {
      localStorage.setItem("password", passwordValue);
      passwordError.innerText = "";
      password.style.border = "3px solid green";
    }
    const getUsername = localStorage.getItem("username");
    const getEmail = localStorage.getItem("email");
    const getPassword = localStorage.getItem("password");

    const getSignup = getUsername && getEmail && getPassword;
    const getSignupValue = usernameValue && emailValue && passwordValue;

    if (
      getSignupValue === "" ||
      !validPassword(passwordValue) ||
      !validEmail(emailValue)
    ) {
      message.innerText = "All fields are required.";
      message.classList.remove("success-message");
      message.classList.add("error-message");
    } else if (getSignup != null) {
      message.innerText = "Account successfully created.";
      message.classList.remove("error-message");
      message.classList.add("success-message");

      for (let i = 0; i < input.length; i++) {
        input[i].value = "";
      }
    }
  });
}

// EXPRESSIONS CHECKER
function validEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validPassword(password) {
  const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return re.test(password);
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
