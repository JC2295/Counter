let numberContainer = document.querySelector("#number");

numberContainer.style = "font-size: 2rem";

let number = 0;

numberContainer.innerText = number;

let countButton = document.querySelector("#count-btn");

let resetButton = document.querySelector("#reset-btn");

countButton.addEventListener("click", addNumber);

resetButton.addEventListener("click", resetNumber);

function addNumber() {

  number++;

  numberContainer.innerText = number;

}

function resetNumber() {

  number = 0;

  numberContainer.innerText = number;

}

