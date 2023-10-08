var acc = document.getElementsByClassName("accordion");
var i;

const email = document.getElementById("email");
const pass = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passError = document.getElementById("pass-error");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.height === "auto") {
      panel.style.height = "0";
    } else {
      panel.style.height = "auto";
    }
  });
}

email.addEventListener("keyup", () => {
  if (email.value.length == 0) {
    emailError.innerText = "Please enter a valid email or phone number.";
    return false;
  }

  if (email.value.length > 4) {
    emailError.innerText = "";
    return true;
  }

  emailError.innerText = "";
  return true;
});

pass.addEventListener("keyup", () => {
  if (pass.value.length < 4) {
    passError.innerText =
      "Your password must contain between 4 and 60 characters.";
    return false;
  }
  passError.innerText = "";
  return true;
});

function handlePass() {
  const showpass = document.getElementById("showPass");

  if (pass.type == "password") {
    pass.type = "text";
    showpass.innerText = "HIDE";
  } else {
    pass.type = "password";
    showpass.innerText = "SHOW";
  }
}
