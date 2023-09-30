const ToastIcon = document.querySelector(".bxs-check-circle");

/*=============== SHOW MODAL ===============*/
const showHeaderPopup = (openButton, popupContent) => {
  const btn = document.getElementById(openButton),
    modalContainer = document.getElementById(popupContent);

  if (btn && modalContainer) {
    btn.addEventListener("click", () => {
      modalContainer.classList.add("show-chat-popup");
    });
  }
};
showHeaderPopup("chat-us", "chat-popup-container");

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelector(".close-chat-popup");
function closeHeaderPopup() {
  const modalContainer = document.getElementById("chat-popup-container");
  modalContainer.classList.remove("show-chat-popup");
}
closeBtn.addEventListener("click", closeHeaderPopup);

const popUpName = document.getElementById("popup-fullname"),
  popUpPhone = document.getElementById("popup-phone"),
  popUpEmail = document.getElementById("popup-email"),
  popUpPropType = document.getElementById("popup-proptype"),
  popUpLocation = document.getElementById("popup-location"),
  popUpState = document.getElementById("popup-state"),
  popUpSubmit = document.getElementById("popup-submit");

popUpSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    popUpName.value &&
    popUpPhone.value &&
    popUpEmail.value &&
    popUpPropType.value &&
    popUpLocation.value &&
    popUpState.value
  ) {
    Message.textContent = `Submitted.. We would get intouch with you shortly!`;
    Message.style.color = "green";
    ToastIcon.classList.replace("bx-x-circle", "bx-loader-circle");
    ToastIcon.style.color = "green";
    progress.style.display = "block";
    toast.classList.add("active");
    progress.classList.add("active");
    let timer1, timer2, timer3;
    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 2200); //1s = 1000 milliseconds
    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 2500);
    timer3 = setTimeout(() => {
      progress.classList.remove("active");
      popUpName.value = "";
      popUpPhone.value = "";
      popUpEmail.value = "";
      popUpPropType.value = "";
      popUpLocation.value = "";
      popUpState.value = "";
      closeHeaderPopup();
    }, 5500);
  } else {
    Message.textContent = "Please complete all fields";
    ToastIcon.classList.replace("bxs-check-circle", "bx-x-circle");
    ToastIcon.style.color = "red";
    progress.style.display = "none";
    Message.style.color = "red";
    toast.classList.add("active");
    progress.classList.add("active");
    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 3000); //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 3300);
  }
});
