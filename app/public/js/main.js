document.addEventListener("DOMContentLoaded", () => {
    const loginLink = document.querySelector("#login_link");
    const logoutBtn = document.querySelector("#logout_btn");

    const displayUsername = () => {
        if (!loginLink) return;

        const token = localStorage.getItem("token");
        const username = localStorage.getItem("userName");

        if (token && username) {
            loginLink.textContent = `${username}`;
            
            if (logoutBtn) {
                logoutBtn.style.display = "block";
            }
        } else {
            loginLink.textContent = "Sign in.";

            if (logoutBtn) {
                logoutBtn.style.display = "none";
            }

            loginLink.addEventListener("click", () => {
                window.location.href = "/html/login.html";
            });
        }
    };
    displayUsername();



    if (logoutBtn) {
        logoutBtn.addEventListener("click", (evt) => {
            evt.preventDefault();

            localStorage.clear()

            window.location.href = "/html/login.html"
        });
    }
});