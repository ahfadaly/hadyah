"use strict";

// start navbar ------------------
let barMenu = document.querySelector(".bar-menu");
window.addEventListener(`scroll`, function () {
  if (this.scrollY >= 100) {
    barMenu.classList.add("show-bar");
  } else {
    barMenu.classList.remove("show-bar");
  }
});
// End navbar ------------------

// start offcanvas ----------------

let SideCollapse = document.querySelector("#navbarSideCollapse");
let offcanvas = document.querySelector(".offcanvas-collapse");

SideCollapse.addEventListener(`click`, function () {
  offcanvas.classList.toggle("open");
});

let scorllIcrement = document.querySelector(".increment-body");
let fixed = document.querySelector(".add-check");
let fixedproduct = document.querySelector(".add-product");

scorllIcrement.addEventListener(`scroll`, function () {
  if (this.scrollTop > 100) {
    fixed.classList.add("scroll-up");
  } else {
    fixed.classList.remove("scroll-up");
  }
});

// End offcanvas ----------------
