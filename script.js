const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");

// Real-time validation
function validateName() {
    const name = nameInput.value.trim();

    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Name must contain at least 3 characters";
        return false;
    }

    document.getElementById("nameError").innerText = "";
    return true;
}

function validateEmail() {
    const email = emailInput.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email address";
        return false;
    }

    document.getElementById("emailError").innerText = "";
    return true;
}

function validatePhone() {
    const phone = phoneInput.value.trim();

    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number";
        return false;
    }

    document.getElementById("phoneError").innerText = "";
    return true;
}

function validatePassword() {
    const password = passwordInput.value;

    if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password must contain at least 8 characters";
        return false;
    }

    document.getElementById("passwordError").innerText = "";
    return true;
}

function validateConfirmPassword() {
    if (confirmInput.value !== passwordInput.value || confirmInput.value === "") {
        document.getElementById("confirmError").innerText = "Passwords do not match";
        return false;
    }

    document.getElementById("confirmError").innerText = "";
    return true;
}

// Add real-time event listeners
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
passwordInput.addEventListener("input", validatePassword);
confirmInput.addEventListener("input", validateConfirmPassword);

// Form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const valid =
        validateName() &&
        validateEmail() &&
        validatePhone() &&
        validatePassword() &&
        validateConfirmPassword();

    if (valid) {
        document.getElementById("successMessage").innerText = "Registration Successful!";
        form.reset();
    } else {
        document.getElementById("successMessage").innerText = "";
    }
});
