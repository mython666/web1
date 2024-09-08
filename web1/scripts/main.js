let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/east-sea.png") {
    myImage.setAttribute("src", "images/sea.png");
  } else {
    myImage.setAttribute("src", "images/east-sea.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("请输入你的名字。");
  localStorage.setItem("name", myName);
  myHeading.textContent =  myName+"，中国的!";
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "钓鱼岛,中国的!";
}
myButton.onclick = function () {
  setUserName();
};

