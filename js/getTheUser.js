// Get the username from local storage
const username = localStorage.getItem("username");

// Set the username as the text content of the <span> element
document.getElementById("user-account").textContent = username;