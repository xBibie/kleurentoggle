const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".color__menu--hide");
const colorHome = document.querySelector(".color--home");
const colorRed = document.querySelector(".color--red");
const colorOrange = document.querySelector(".color--orange");
const colorYellow = document.querySelector(".color--yellow");
const colorGreen = document.querySelector(".color--green");
const colorBlue = document.querySelector(".color--blue");
const colorPurple = document.querySelector(".color--purple");
const checkHome = document.getElementById("gray");
const checkRed = document.getElementById("red");
const checkOrange = document.getElementById("orange");
const checkYellow = document.getElementById("yellow");
const checkGreen = document.getElementById("green");
const checkBlue = document.getElementById("blue");
const checkPurple = document.getElementById("purple");
const text = document.querySelector(".text");

const showMenu = () => {
  menu.classList.remove("color__menu--hide");
  menu.classList.add("color__menu");
};
const hideMenu = () => {
  menu.classList.remove("color__menu");
  menu.classList.add("color__menu--hide");
};

const setColor = (color) => {
  document
    .querySelector("body")
    .classList.remove(
      "color--home",
      "color--red",
      "color--orange",
      "color--yellow",
      "color--green",
      "color--blue",
      "color--purple"
    );
  document.querySelector("body").classList.add(color);
};

const setText = (e) => {
  text.innerHTML = `Background color selected: ${e}`;
};

hamburger.addEventListener("mouseover", showMenu);
hamburger.addEventListener("mouseout", hideMenu);

const keyHandler = (e) => {
  switch (e) {
    case "1":
      colorHandler("gray");
      break;
    case "2":
      colorHandler("red");
      break;
    case "3":
      colorHandler("orange");
      break;
    case "4":
      colorHandler("yellow");
      break;
    case "5":
      colorHandler("green");
      break;
    case "6":
      colorHandler("blue");
      break;
    case "7":
      colorHandler("purple");
      break;
    default:
      break;
  }
};

const colorHandler = (setEvent) => {
  switch (setEvent) {
    case "gray":
      setColor("color--home");
      hideMenu();
      setText("gray");
      document.getElementById(setEvent).checked = true;
      break;
    case "red":
      setColor("color--red");
      hideMenu();
      setText("red");
      document.getElementById(setEvent).checked = true;
      break;
    case "orange":
      setColor("color--orange");
      hideMenu();
      setText("orange");
      document.getElementById(setEvent).checked = true;
      break;
    case "yellow":
      setColor("color--yellow");
      hideMenu();
      setText("yellow");
      document.getElementById(setEvent).checked = true;
      break;
    case "green":
      setColor("color--green");
      hideMenu();
      setText("green");
      document.getElementById(setEvent).checked = true;
      break;
    case "blue":
      setColor("color--blue");
      hideMenu();
      setText("blue");
      document.getElementById(setEvent).checked = true;
      break;
    case "purple":
      setColor("color--purple");
      hideMenu();
      setText("purple");
      document.getElementById(setEvent).checked = true;
      break;
    default:
      setColor("color--home");
      hideMenu();
      setText("gray");
      document.getElementById("gray").checked = true;
      break;
  }
};

colorHandler();

colorHome.addEventListener("click", function () {
  colorHandler("gray");
});
colorRed.addEventListener("click", function () {
  colorHandler("red");
});
colorOrange.addEventListener("click", function () {
  colorHandler("orange");
});
colorYellow.addEventListener("click", function () {
  colorHandler("yellow");
});
colorGreen.addEventListener("click", function () {
  colorHandler("green");
});
colorBlue.addEventListener("click", function () {
  colorHandler("blue");
});
colorPurple.addEventListener("click", function () {
  colorHandler("purple");
});

document.addEventListener("keydown", (event) => {
  keyHandler(event.key);
});

checkHome.addEventListener("click", function () {
  colorHandler("gray");
});
checkRed.addEventListener("click", function () {
  colorHandler("red");
});
checkOrange.addEventListener("click", function () {
  colorHandler("orange");
});
checkYellow.addEventListener("click", function () {
  colorHandler("yellow");
});
checkGreen.addEventListener("click", function () {
  colorHandler("green");
});
checkBlue.addEventListener("click", function () {
  colorHandler("blue");
});
checkPurple.addEventListener("click", function () {
  colorHandler("purple");
});