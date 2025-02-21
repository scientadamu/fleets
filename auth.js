document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const resetForm = document.getElementById("resetForm");
    const otpForm = document.getElementById("otpForm");

    const loginLink = document.getElementById("loginLink");
    const registerLink = document.getElementById("registerLink");
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");
    const backToLoginLink = document.getElementById("backToLoginLink");
    const backToLoginFromOTP = document.getElementById("backToLoginFromOTP");

    // Default user credentials
    const defaultUser = {
        email: "admin@gmail.com",
        password: "admin123456",
        otp: "123456"
    };

    function showForm(formToShow) {
        if (!formToShow) return;

        [loginForm, registerForm, resetForm, otpForm].forEach(form => {
            if (form) form.style.display = "none";
        });

        formToShow.style.display = "block";
    }

    showForm(loginForm);

    if (registerLink) {
        registerLink.addEventListener("click", function (event) {
            event.preventDefault();
            showForm(registerForm);
        });
    }

    if (loginLink) {
        loginLink.addEventListener("click", function (event) {
            event.preventDefault();
            showForm(loginForm);
        });
    }

    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener("click", function (event) {
            event.preventDefault();
            showForm(resetForm);
        });
    }

    if (backToLoginLink) {
        backToLoginLink.addEventListener("click", function (event) {
            event.preventDefault();
            showForm(loginForm);
        });
    }

    if (backToLoginFromOTP) {
        backToLoginFromOTP.addEventListener("click", function (event) {
            event.preventDefault();
            showForm(loginForm);
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (!email || !password) {
                alert("Please enter email and password!");
                return;
            }

            if (email === defaultUser.email && password === defaultUser.password) {
                alert("Login Successful! Please verify OTP.");
                showForm(otpForm);
            } else {
                alert("Invalid email or password!");
            }
        });
    }

    const otpInputs = document.querySelectorAll(".otp-input");

    if (otpInputs.length > 0) {
        otpInputs.forEach((input, index) => {
            input.addEventListener("input", function () {
                this.value = this.value.replace(/[^0-9]/g, '');
                if (this.value.length === 1 && index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            });

            input.addEventListener("keydown", function (e) {
                if (e.key === "Backspace" && this.value === "" && index > 0) {
                    otpInputs[index - 1].focus();
                }

                if (!e.key.match(/[0-9]/) && e.key !== "Backspace" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
                    e.preventDefault();
                }

                if (e.key === "ArrowLeft" && index > 0) {
                    otpInputs[index - 1].focus();
                } else if (e.key === "ArrowRight" && index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            });
        });
    }

    if (otpForm) {
        otpForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const otpValue = Array.from(otpInputs).map(input => input.value).join("");

            if (otpValue === defaultUser.otp) {
                alert("OTP Verified! Redirecting to Dashboard...");
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid OTP! Please try again.");
            }
        });
    }
});
