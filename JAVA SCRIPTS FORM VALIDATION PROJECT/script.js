// Selectors
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const phoneNumber = document.querySelector("#phoneNumber");
const error = document.querySelector(".form-control.error");
const success = document.querySelector(".form-control.success");
const cover = document.querySelector(".cover");
const submit = document.querySelector("#submit");

// SubmitEvent
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
// Error Message
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}
// Success Message
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// Email Check
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
// Check All inputs
function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmpasswordValue = confirmPassword.value.trim();
  let valid = true;
  // username
  if (usernameValue === "" || username == Number) {
    setErrorFor(username, "Username cannot be blank or number");
    valid = false;
  } else if (usernameValue.length < 8) {
    setErrorFor(username, "Username must more than 8 characters");
    valid = false;
  } else {
    setSuccessFor(username);
  }

  // Email
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
    valid = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
    valid = false;
  } else {
    setSuccessFor(email);
  }
  //Phone Number
  if (
    phoneNumber == "" ||
    phoneNumber == 123456789 ||
    phoneNumber.value.length < 10
  ) {
    setErrorFor(phoneNumber, "Not a valid Number");
    valid = false;
  } else {
    setSuccessFor(phoneNumber);
  }

  //Password
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
    valid = false;
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password must be 8 characters");
    valid = false;
  } else if (passwordValue == 12345678 || passwordValue == 123456789) {
    setErrorFor(password, "Password can't be 12345678");
    valid = false;
  } else if (password.value == username.value) {
    setErrorFor(password, "Password can't be username");
  } else {
    setSuccessFor(password);
  }
  // Confirm password
  if (confirmpasswordValue === "") {
    setErrorFor(confirmPassword, "Confrim Password cannot be blank");
    valid = false;
  } else if (passwordValue !== confirmpasswordValue) {
    setErrorFor(confirmPassword, "Passwords does not match");
    valid = false;
  } else {
    setSuccessFor(confirmPassword);
  }
  // After Submit
  if (valid) {
    localStorage.setItem("Username", username.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Phone Number", phoneNumber.value);
    localStorage.setItem("Password", password.value);
    cover.style.display = "flex ";
    setTimeout(function () {
      cover.style.display = "none";
      form.reset();
    }, 2000);
  }
}
