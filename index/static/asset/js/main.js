/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navTheme = document.getElementById("theme-button"),
  toast = document.querySelector(".toast"),
  Message = document.querySelector(".message-text"),
  progress = document.querySelector(".progress"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW ======*/
// validate if constant exist
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

/*===== MENU HIDDEN ======*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

if (navTheme) {
  navTheme.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
    if (navTheme.classList.contains("bx-sun")) {
      let timer1, timer2;
      Message.textContent = "Light Mode Activated";
      toast.classList.add("active");
      progress.classList.add("active");

      timer1 = setTimeout(() => {
        toast.classList.remove("active");
      }, 2000); //1s = 1000 milliseconds

      timer2 = setTimeout(() => {
        progress.classList.remove("active");
      }, 2300);
    } else {
      let timer1, timer2;
      Message.textContent = "Dark Mode Activated";
      toast.classList.add("active");
      progress.classList.add("active");

      timer1 = setTimeout(() => {
        toast.classList.remove("active");
      }, 2000); //1s = 1000 milliseconds

      timer2 = setTimeout(() => {
        progress.classList.remove("active");
      }, 2300);
    }
  });
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //when we click on each nav__link, we remove the show__menu class
  navMenu.classList.remove("show__menu");
}

navLink.forEach((n) => {
  n.addEventListener("click", linkAction);
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  // When the scroll is greater than 350 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 350) scrollup.classList.add("show-scroll");
  else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const navbar = document.getElementById("navbar");
  // When the scroll is greater than 50 viewport height, add the scroll-navbar class to the header tag
  if (this.scrollY >= 50) navbar.classList.add("scroll-navbar");
  else navbar.classList.remove("scroll-navbar");
}
window.addEventListener("scroll", scrollHeader);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== START MIXITUP TENANT / LANDLORD ===============*/
// MixitUp query for the "TENANTS & LANDLORDS" filters
let mixerSingles = mixitup(".deal__pills--wrapper", {
  selectors: {
    target: ".deal__content",
  },
  animation: {
    duration: 100,
    effects: "fade",
    reverseOut: true,
    nudge: false,
  },
});
// Default Filter Single when page loads
mixerSingles.filter(".tenants");

/*=============== END MIXITUP TENANT / LANDLORD ===============*/

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".faq__accordion-item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".faq__accordion-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".faq__accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const selectInput = document.getElementById("input-search");
const selectDropdown = document.getElementById("select-dropdown");
const options = document.querySelectorAll(".process__form-option");
const dealSection = document.querySelector(".deals");

selectInput.addEventListener("click", (e) => {
  e.preventDefault();
  toggleHidden();
  if (e.target.id === "input-search") {
    selectDropdown.classList.remove("dropdown--hidden");
  }
});

function toggleHidden() {
  selectDropdown.classList.toggle("dropdown--hidden");
  dealSection.classList.add("deals--active");
}

// run a function when the user clicks on the body
document.addEventListener("click", (e) => {
  // if the dropdown is visible
  if (e.target.id !== "input-search" && e.target.id !== "input-search") {
    // hide the dropdown
    selectDropdown.classList.add("dropdown--hidden");
    dealSection.classList.remove("deals--active");
  } else if (e.target.id == "input-search" && e.target.id == "input-search") {
    selectDropdown.classList.remove("dropdown--hidden");
  } else {
    return;
  }
});

options.forEach(function (option) {
  option.addEventListener("click", function (e) {
    setSelectTitle(e);
  });
});

function setSelectTitle(e) {
  const labelElement = document.querySelector(
    `label[for="${e.target.id}"]`
  ).innerText;
  selectInput.innerText = labelElement;
  toggleHidden();
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  delay: 400,
  //   reset: true,
});

sr.reveal(`.header__title, .popular__container`);
sr.reveal(`.header__description`, { delay: 500 });
sr.reveal(`.header__search`, { delay: 600 });
sr.reveal(`.header__value`, { delay: 700 });
sr.reveal(`.header__followers`, { delay: 750 });
sr.reveal(`.header__images`, { delay: 800, origin: "bottom" });
sr.reveal(`.destination__item`, {
  origin: "top",
  interval: 200,
});

sr.reveal(
  `.section__title, .section__subtitle,  .section__description, .join__description, .property-home`,
  {
    origin: "bottom",
    delay: 50,
  }
);
sr.reveal(
  `.destination__button, .destination__wrapper--button, .about__btn, .join__button`,
  {
    origin: "bottom",
    delay: 100,
  }
);
sr.reveal(`.join__content--wrapper`, { origin: "bottom" });
sr.reveal(`.about__img-1`, { origin: "left" });
sr.reveal(`.about__img-2`, { origin: "bottom" });
sr.reveal(`.faq__images`, { origin: "left" });
sr.reveal(`.faq__content`, { origin: "right" });

//LAZY LOADING IMAGES
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //Remove the data-src attribute to load the image
  entry.target.src = entry.target.dataset.src;

  //Remove the observer after image is loaded
  entry.target.addEventListener("load", () => {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach((img) => imgObserver.observe(img));
