
// LOGIN FUNCTION
function login() {
    history.pushState(null, "", "login.html");
    location.replace("login.html");
}

// SIGNUP FUNCTION
function signup() {
    history.pushState(null, "", "signup.html");
    location.replace("signup.html");
}

// LOGOUT FUNCTION
function logout() {
    history.pushState(null, "", "index.html");
    location.replace("index.html");
}

