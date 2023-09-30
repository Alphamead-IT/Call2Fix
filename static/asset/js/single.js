const thumbSwiper = new Swiper(".thumbSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const MainSwiper = new Swiper(".mainSwiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-single-next",
    prevEl: ".swiper-button-single-prev",
  },
  thumbs: {
    swiper: thumbSwiper,
  },
});

const ShowMore = document.getElementById("show-more"),
  ShowMoreBtn = document.getElementById("show-more-btn");

ShowMoreBtn.addEventListener("click", () => {
  ShowMore.classList.add("visible");
  ShowMoreBtn.classList.add("hide");
});

// MixitUp query for the "shared & Exclsuive" filters
let mixerSingles = mixitup(".sliding__widget--container", {
  selectors: {
    target: ".sliding__widget--container-item",
  },
  animation: {
    duration: 450,
    effects: "fade translateY(1000px) reverse nudgeY(30px)",
  },
});

// Default Filter Single when page loads
mixerSingles.filter(".shared-single");

//Shared & Exclusive Buttons
const slidingFilterItem = document.querySelectorAll(
  ".sliding__widget--filter-item"
);

function activeLists() {
  slidingFilterItem.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}

slidingFilterItem.forEach((l) => l.addEventListener("click", activeLists));

//Function to show sliderWidget when Clicking the startbooking button
const mainSingle = document.getElementById("main__single");
const startBookings = document.querySelectorAll(".start__booking");
const sliderWidget = document.querySelector(".sliding__widget");
const closeBtn = document.getElementById("close-btn");

startBookings.forEach((startBooking) => {
  startBooking.addEventListener("click", () => {
    sliderWidget.classList.add("sliding__widget--active");
  });
});

closeBtn.addEventListener("click", () => {
  sliderWidget.classList.remove("sliding__widget--active");
});

// CREATING ANIMATED CART BUTTON
const cartButtons = document.querySelectorAll(".room-button");
//CART POPUP
let cartClose = document.querySelectorAll("#cart-popup-close");
const cartPopup = document.getElementById("cart-popup");

cartButtons.forEach((button) => {
  console.log("working here")
  button.addEventListener("click", cartClick);
});

cartClose.forEach((close) => {
  close.addEventListener("click", () => {
    cartPopup.classList.remove("show-cart-popup");
  });
});

function cartClick() {
  let button = this;
  let timer1, timer2;

  console.log("this is it")
  button.classList.add("clicked");
  button.classList.add("disabled");
  Message.textContent = "item added to cart";
  toast.classList.add("active");
  progress.classList.add("active");

  const set = setInterval(() => {
    cartPopup.classList.add("show-cart-popup");
  }, 3000);

  cartClose.forEach((close) => {
    close.addEventListener("click", () => {
      clearInterval(set);
    });
  });

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 2000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 2300);

  setTimeout(() => {
    button.classList.remove("clicked");
    button.classList.remove("disabled");
  }, 2300);
}

/*==================== POPUP ====================*/
// IMAGE POPUP
const popupContent = document.querySelector(".popup__content");
const popupFilterImage = document.querySelector(".popup__filter--image");
const popupFilterDescription = document.querySelector(
  ".popup__filter--description"
);

// function for popupModeActivated
function popupModeActivated() {
  popupContent.classList.add("popup__activated");
}

function removePopupModeActivated() {
  popupContent.classList.remove("popup__activated");
}

popupFilterDescription.addEventListener("click", popupModeActivated);
popupFilterImage.addEventListener("click", removePopupModeActivated);

// VIDEO POPUP
const btnOpenVideo = document.querySelector(".play-video");
const VideoPopup = document.getElementById("video-popup");

function popUp() {
  VideoPopup.classList.add("show-video-popup");
}

btnOpenVideo.addEventListener("click", popUp);

const btnCloseVideo = document.getElementById("video-popup-close");

btnCloseVideo.addEventListener("click", () => {
  VideoPopup.classList.remove("show-video-popup");
});

// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player("video", {
    events: {
      // call this function when player is ready to use
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  // bind events
  var pauseButton = document.getElementById("video-popup-close");
  pauseButton.addEventListener("click", function () {
    player.pauseVideo();
  });
}

//LAZY LOADING IMAGES
const popupTargets = document.querySelectorAll(".popup__images");
const popupImg = document.querySelector(".popup__images img");

popupTargets.forEach((popuptarget) => {
  //Remove the observer after image is loaded
  popupImg.addEventListener("load", () => {
    popuptarget.classList.remove("lazy");
  });
});

let cartQantity = document.querySelector(".cart-quantity");
let bookingLabel = document.getElementById("start__booking-mobile");
const containsItem = document.querySelector(".cart-items");
const noItem = document.querySelector(".no-cart-items");

if (cartQantity.innerText == 0) {
  noItem.style.display = "block";
  containsItem.style.display = "none";
  bookingLabel.innerText = "start booking";
}

if (cartQantity.innerText > 0) {
  noItem.style.display = "none";
  containsItem.style.display = "block";
  bookingLabel.innerText = "Continue booking";
}
