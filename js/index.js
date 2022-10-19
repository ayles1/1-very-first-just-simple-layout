const menuItemAboutMe = document.querySelectorAll(".menu__item")[0];
const scrollTargetAboutMe = document.querySelector(".page-two");

menuItemAboutMe.onclick = function () {
  scrollTargetAboutMe.scrollIntoView({ block: "start", behavior: "smooth" });
};

const menuItemSkills = document.querySelectorAll(".menu__item")[1];
const scrollTargetSkills = document.querySelector(".page-three");

menuItemSkills.onclick = function () {
  scrollTargetSkills.scrollIntoView({ block: "start", behavior: "smooth" });
};

const menuItemPortfolio = document.querySelectorAll(".menu__item")[2];

menuItemPortfolio.onclick = function () {
  alert("Hello world");
};
