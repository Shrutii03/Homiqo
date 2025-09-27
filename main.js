const menu = document.getElementById("menu-btn");
const nav = document.getElementById("nav-links");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

const explore = document.querySelector(".header__btns .btn:nth-child(1)");
explore.addEventListener("click", () => {
  alert("Exploring properties now!");
});

const login = document.querySelector(".header__btns .btn:nth-child(2)");
login.addEventListener("click", () => {
  alert("Redirecting to Login Page...");
});

const cust = document.querySelectorAll(".customer__card");
cust.forEach((card) => {
  card.addEventListener("click", () => {
    alert(`Opening blog for ${card.querySelector("h4").textContent}`);
  });
});

const regis = document.querySelector(".find__btns .btn:nth-child(1)");
regis.addEventListener("click", () => {
  alert("Redirecting to Registration Page...");
});

const signIn = document.querySelector(".find__btns .btn:nth-child(2)");
signIn.addEventListener("click", () => {
  alert("Redirecting to Sign In Page...");
});
// Hostel cards
document.querySelectorAll(".hostel__card").forEach((card) => {
  card.addEventListener("click", () => {
    const hostelName = card.querySelector("h4").textContent.trim();
    alert(`Opening details for ${hostelName}`);
  });
});
 
// Types cards
document.querySelectorAll(".types__card").forEach((card) => {
  card.addEventListener("click", () => {
    const typeName = card.querySelector("p").textContent.trim();
    alert(`Searching for ${typeName}`);
  });
});


// scrolling effect
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".hotel__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".property__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".trip__card", {
  ...scrollRevealOption,
  interval: 500,
});
 