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
    const confirmpassword = document.getElementById("confirmpassword").value;
    const agree = document.getElementById("agree").checked;

    const nameError = document.getElementById(
        "name-error"
    );
    const emailError = document.getElementById(
        "email-error"
    );
    const mobileError = document.getElementById(
        "mobile-error"
    );
    const passwordError = document.getElementById(
        "password-error"
    );
    const confirmpasswordError = document.getElementById(
        "confirmpassword-error"
    );
    const agreeError = document.getElementById(
        "agree-error"
    );

    nameError.textContent = "";
    emailError.textContent = "";
    mobileError.textContent = "";
    passwordError.textContent = "";
    confirmpasswordError.textContent = "";
    agreeError.textContent = "";

    let isValid = true;

    if (name === "" || [a-z,A-Z].test(name)) {
    nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (email === "" || !email.includes("@.")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }
    if (mobile === "" || mobile.length<10 || mobile>10) {
        mobileError.textContent =
            "Please enter your number.";
        isValid = false;
    }

    if (password === "" || password.length < 8) {
        passwordError.textContent =
            "Please enter a password with at least 8 characters.";
        isValid = false;
    }

    if (confirmpassword === "" || password.length < 8) {
        confirmpassword.textContent =
            "Please enter same password with at least 8 characters";
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent =
            "Please agree to the above information.";
        isValid = false;
    }

    return isValid;
}

function loginForm(){
    console.log('valitionfunction call');
    const lemail = document.getElementById("lemail").value;
    const lpassword = document.getElementById("lpassword").value;


    const lemailError = document.getElementById(
        "lemail-error"
    );
    const lpasswordError = document.getElementById(
        "lpassword-error"
    );


    lemailError.textContent = "";
    lpasswordError.textContent = "";

    let isValid = true;

    if (lemail === "" || !lemail.includes("@.")) {
        lemailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }
    if (lpassword === "" || lpassword.length < 8) {
        lpasswordError.textContent =
            "Please enter a password with at least 8 characters.";
        isValid = false;
    }

}
