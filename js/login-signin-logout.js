
// LOGIN COMMAND
function login() {
    location.replace("login.html");
    history.replaceState(null, "", "login.html");
}

// SIGNUP COMMAND
function signup() {
    location.replace("signup.html");
    history.replaceState(null, "", "signup.html");
}

// LOGOUT COMMAND
function logout() {
    location.replace("index.html");
    history.replaceState(null, "", "index.html");
}

