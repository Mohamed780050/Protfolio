////////////////////////// Header //////////////////////////
let header = document.querySelector("header .container");
let words = document.querySelectorAll("header .container a");
let phone = document.querySelector("header .container .phone .phone-number");
window.onscroll = function () {
  if (window.scrollY >= 100) {
    header.style.backgroundColor = "white";
    words.forEach((ele) => {
      ele.classList.add("black");
      ele.classList.remove("white");
    });
    phone.style.color = "var(--secondary-color)";
    phone.style.borderColor = "var(--secondary-color)";
  } else {
    header.style.backgroundColor = "transparent";
    words.forEach((ele) => {
      ele.classList.add("white");
      ele.classList.remove("black");
    });
    phone.style.color = "white";
    phone.style.borderColor = "white";
  }
};
////////////////////////// choose //////////////////////////
let boxes = document.querySelectorAll("form .boxes .box");
let ps = document.querySelectorAll("form .boxes .box p");
boxes.forEach((box) => {
  box.onclick = function () {
    if (this.classList.contains("choosed")) {
      this.classList.remove("choosed");
      ps.forEach((p) => {
        if (p.dataset.number == box.dataset.mnumber) {
          p.style.color = "var(--p-color)";
        }
      });
    } else {
      this.classList.add("choosed");
      ps.forEach((p) => {
        if (p.dataset.number == box.dataset.mnumber) {
          p.style.color = "var(--secondary-color)";
        }
      });
    }
  };
});
////////////////////////// Toggel //////////////////////////
let Toggel = document.querySelector(".toggle");
let linksHolder = document.querySelector("header .info .links");
let links = document.querySelectorAll("header .info .links li a");
Toggel.onclick = function () {
  linksHolder.style.display = "block";
  linksHolder.style.opacity = "1";
  linksHolder.style.top = "35px";
  links.forEach((link) => {
    if (link.classList.contains("black")) {
      link.classList.remove("black");
      link.classList.add("white");
    }
  });
};
links.forEach((el) => {
  el.onclick = function () {
    linksHolder.style.opacity = "0";
    linksHolder.style.top = "0";
  };
});
