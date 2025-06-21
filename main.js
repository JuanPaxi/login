document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    if (user === "admin" && pass === "1234") {
        error.style.color = "green";
        error.textContent = "Login successful!";
        // window.location.href = "dashboard.html";
    } else {
        error.style.color = "red";
        error.textContent = "Invalid username or password.";
    }
});
