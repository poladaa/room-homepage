"use strict";
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const textH1 = document.querySelector(".h1-text");
const textP = document.querySelector(".p-text");
const head = document.querySelector(".nav-left");

nextBtn.addEventListener("click", () => {
  textH1.textContent = "We are available all across the globe";
  textH1.classList.add("transition");
  textP.textContent =
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today";
  textP.classList.add("transition");
  head.style.backgroundImage = "url(images/desktop-image-hero-2.jpg)";
  head.classList.add("transition");
});

previousBtn.addEventListener("click", () => {
  textH1.textContent = "Discover innovative ways to decorate";
  textH1.classList.add("transition");
  textP.textContent =
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
  textP.classList.add("transition");

  head.style.backgroundImage = "url(images/desktop-image-hero-1.jpg)";
  head.classList.add("transition");
});
