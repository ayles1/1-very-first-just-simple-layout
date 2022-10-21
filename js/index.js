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
const scrollTargetPortfolio = document.querySelector(".page-four");

menuItemPortfolio.onclick = function () {
  scrollTargetPortfolio.scrollIntoView({ block: "start", behavior: "smooth" });
};

const menuItemContacts = document.querySelectorAll(".menu__item")[3];
const scrollTargetContacts = document.querySelector(".page-five");

menuItemContacts.onclick = function () {
  scrollTargetContacts.scrollIntoView({ block: "start", behavior: "smooth" });
};

//Burger script---------------------------------------------------
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
const hambContainer = document.querySelector(".hamb__container");

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  hambContainer.classList.toggle("opened");

  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
//----------------------------------------------------------------
