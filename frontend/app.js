const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

// Register
if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", { username, email, password });
            localStorage.setItem("token", response.data.token);
            window.location.href = "index.html";
        } catch (error) {
            console.error("Registration error:", error);
        }
    });
}

// Login
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            localStorage.setItem("token", response.data.token);
            window.location.href = "index.html";
        } catch (error) {
            console.error("Login error:", error);
        }
    });
}
