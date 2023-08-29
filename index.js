const container = document.getElementById("container");
const email = document.getElementById("email");
const emailLabel = document.getElementById("email-label");
const emailError = document.getElementById("email-error");
const emailInput = document.getElementById("email-input");
const button = document.getElementById("button");
const submitLink = document.getElementById("link")


function validateEmail() {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.value.match(regex)) {
        emailError.innerHTML = "Valid email required";
        email.style.borderColor = "red";
        // button.style.pointerEvents = none;
        // button.disabled = true;
        return false;
        submitLink.preventDefault();
    } else {
        emailError.innerHTML = "";
        email.style.borderColor = "hsl(0, 2%, 23%)"
        return true;
        button.disabled = false;
    }
}

