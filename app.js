function change_image(image) {

    var container = document.getElementById("main-image");

    container.src = image.src;
}
document.addEventListener("DOMContentLoaded", function (event) {
});

// form validation
function validateForm() {
    console.log('valitionfunction call');
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;
    const subject = document.getElementById("subscribe").value;
    const agree = document.getElementById("agree").checked;

    const nameError = document.getElementById(
        "name-error"
    );
    const emailError = document.getElementById(
        "email-error"
    );
    const addressError = document.getElementById(
        "mobile-error"
    );
    const passwordError = document.getElementById(
        "password-error"
    );
    const subscribeError = document.getElementById(
        "subscribe-error"
    );
    const agreeError = document.getElementById(
        "agree-error"
    );

    nameError.textContent = "";
    mobileError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    subscribeError.textContent = "";
    agreeError.textContent = "";

    let isValid = true;

    if (name === "" || [a-z,A-Z].test(name)) {
    nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (mobile === "" .Number(0,1,2,3,4,5,6,7,8,9)) {
        mobileError.textContent =
            "Please enter your number.";
        isValid = false;
    }

    if (email === "" || !email.includes("@.")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    if (subscribe === "") {
        subscribeError.textContent =
            "Please select Yes and No";
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent =
            "Please agree to the above information.";
        isValid = false;
    }

    return isValid;
}
