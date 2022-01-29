// Oppgave 1
const btn = document.getElementById("remove-btn");

btn.addEventListener("click", () => {
  document.getElementById("remove").innerHTML = "";
});
// Oppgave 2
const btn1 = document.getElementById("change-btn");

btn1.addEventListener("click", () => {
  document.getElementById("change").innerHTML =
    "Denne teksten har jeg valgt selv";
});
// Oppgave 3
let input1 = document.getElementById("input");

input1.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    document.getElementById("input-text").innerHTML = input1.value;
  }
});
// Oppgave 4
const myList = ["item one", "item two", "item three"];
const btn2 = document.getElementById("write-list");

btn2.addEventListener("click", () => {
  document.getElementById("ul").innerHTML =
    "<li>" +
    myList[0] +
    "</li><li>" +
    myList[1] +
    "</li><li>" +
    myList[2] +
    "</li>";
});
// Oppgave 5
const btn3 = document.getElementById("create");

btn3.addEventListener("click", () => {
  document.getElementById("placeholder").innerHTML =
    "<" +
    document.getElementById("select").value +
    ">" +
    document.getElementById("text").value +
    "</" +
    document.getElementById("select").value +
    ">";
});
// Oppgave 6
const btn4 = document.getElementById("remove-li");

btn4.addEventListener("click", () => {
  const removeLi = document.getElementById("list");
  removeLi.removeChild(removeLi.childNodes[0]);
});
// Oppgave 7
const letters = document.getElementById("name");
const btn5 = document.getElementById("order");

letters.addEventListener("keyup", () => {
  const letters1 = letters.value;
  if (letters1.length <= 4) {
    btn5.disabled = false;
    btn5.style = "border: 1px solid grey;";
  } else {
    btn5.disabled = true;
    btn5.style = "border: 1px solid red;";
  }
});
// Oppgave 8
const children = document.querySelector(".children");
const btn6 = document.getElementById("color");
const allLi = children.querySelectorAll("li");

btn6.addEventListener("click", () => {
  Array.from(allLi).forEach((li, index) => {
    if ((index + 1) % 2 === 0) {
      li.style = "border: 2px solid pink;";
    } else {
      li.style = "border: 2px solid green;";
    }
  });
});
