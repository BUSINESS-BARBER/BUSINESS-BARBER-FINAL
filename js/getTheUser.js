// Get the username from local storage
const username = localStorage.getItem("username");

// Set the username as the text content of the <h1> element
document.getElementById("user-account").textContent = username;

// LOGOUT COMMAND
function logout() {
  location.replace("index.html");
  history.replaceState(null, "", "index.html");
}
