const showPassword = document.querySelector(".password-show"),
  showConfirmPassword = document.querySelector(".confirm-password-show"),
  passwordInput = document.querySelector(".password"),
  ConfirmpasswordInput = document.querySelector(".confirm-password"),
  submitPassword = document.getElementById("submit-password"),
  myInputs = document.querySelectorAll(".psw"),
  hints = document.querySelector(".hints"),
  lower = document.getElementById("lower"),
  upper = document.getElementById("upper"),
  number = document.getElementById("number"),
  length = document.getElementById("length"),
  toast = document.querySelector(".toast"),
  ToastIcon = document.querySelector(".bxs-check-circle"),
  Message = document.querySelector(".message-text"),
  progress = document.querySelector(".progress"),
  notification = document.querySelector(".notification");

showPassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPassword.classList.replace("bxs-low-vision", "bxs-show");
    document.getElementById("hints").style.display = "flex";
  } else {
    passwordInput.type = "password";
    showPassword.classList.replace("bxs-show", "bxs-low-vision");
    document.getElementById("hints").style.display = "flex";
  }
});

showConfirmPassword.addEventListener("click", () => {
  if (ConfirmpasswordInput.type === "password") {
    ConfirmpasswordInput.type = "text";
    showConfirmPassword.classList.replace("bxs-low-vision", "bxs-show");
    document.getElementById("hints").style.display = "flex";
  } else {
    ConfirmpasswordInput.type = "password";
    showConfirmPassword.classList.replace("bxs-show", "bxs-low-vision");
    document.getElementById("hints").style.display = "flex";
  }
});

submitPassword.addEventListener("click", (e) => {
  e.preventDefault();
  ConfirmpasswordInput.value = " ";
  passwordInput.value = " ";
  document.getElementById("hints").style.display = "flex";

  if (
    (passwordInput.value.length = 0) &&
    (ConfirmpasswordInput.value.length = 0)
  ) {
    ConfirmpasswordInput.value = " ";
    passwordInput.value = " ";
    let timer1, timer2;
    Message.textContent = "Please complete your password";
    Message.style.color = "red";
    ToastIcon.classList.replace("bxs-check-circle", "bx-x-circle");
    ToastIcon.style.color = "red";
    progress.style.display = "none";
    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 2000); //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 2300);

    return false;
  }

  const invalidOne = lower.classList.contains("invalid");
  const invalidTwo = upper.classList.contains("invalid");
  const invalidThree = number.classList.contains("invalid");
  const invalidFour = length.classList.contains("invalid");

  if (invalidOne || invalidTwo || invalidThree || invalidFour) {
    ConfirmpasswordInput.value = " ";
    passwordInput.value = " ";
    let timer1, timer2;
    Message.textContent = "criteria not met!";
    Message.style.color = "red";
    ToastIcon.classList.replace("bxs-check-circle", "bx-x-circle");
    ToastIcon.style.color = "red";
    progress.style.display = "none";
    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 2000); //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 2300);

    return false;
  }

  if (passwordInput.value !== ConfirmpasswordInput.value) {
    ConfirmpasswordInput.value = " ";
    passwordInput.value = " ";
    let timer1, timer2;
    Message.textContent = "Passwords do not match.";
    Message.style.color = "red";
    ToastIcon.classList.replace("bxs-check-circle", "bx-x-circle");
    ToastIcon.style.color = "red";
    progress.style.display = "none";
    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 2000); //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 2300);

    return false;
  }

  if (
    passwordInput.value === ConfirmpasswordInput.value &&
    !invalidOne &&
    !invalidTwo &&
    !invalidThree &&
    !invalidFour
  ) {
    let timer1, timer2;
    Message.textContent = "Password Reset Successful";
    Message.style.color = "green";
    ToastIcon.classList.replace("bx-x-circle", "bxs-check-circle");
    ToastIcon.style.color = "green";
    progress.style.display = "none";
    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 2000); //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 2300);

    return false;
  }
});

myInputs.forEach((myInput) => {
  // When the user clicks on the password field, show the message box
  myInput.onfocus = function () {
    document.getElementById("hints").style.display = "flex";
  };

  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function () {
    document.getElementById("hints").style.display = "none";
  };

  // When the user starts to type something inside the password field
  myInput.onkeyup = function () {
    // Validate lowercase letters
    let lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
      lower.classList.remove("invalid");
      lower.classList.add("valid");
    } else {
      lower.classList.remove("valid");
      lower.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
      upper.classList.remove("invalid");
      upper.classList.add("valid");
    } else {
      upper.classList.remove("valid");
      upper.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  };
});
