function login() {
	// Get the username and password from the form
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	// Check if the username and password are correct
	if (username === "admin" && password === "password") {
		// If the login is successful, redirect to the dashboard
		window.location.href = "index.html";
	} else {
		// If the login fails, display an error message
		document.getElementById("error-message").innerHTML = "Invalid username or password.";
	}
}