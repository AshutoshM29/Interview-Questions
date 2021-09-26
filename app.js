var inputOne = document.querySelector("#input1");
var inputTwo = document.querySelector("#input2");
var addBtn = document.querySelector("#add-button");
var subBtn = document.querySelector("#sub-button");
var mulBtn = document.querySelector("#mul-button");
var divBtn = document.querySelector("#div-button");
var outputDiv = document.querySelector("#output");

addBtn.addEventListener("click", add);
subBtn.addEventListener("click", substract);
mulBtn.addEventListener("click", multiplication);
divBtn.addEventListener("click", division);

function clickHandler() {
}

function add() {
    var sum = Number(inputOne.value) + Number(inputTwo.value);
    console.log(sum);
    outputDiv.innerText = "The addition of the given numbers is : " + sum;
}

function substract() {
    var minus = Number(inputOne.value) - Number(inputTwo.value);
    console.log(minus);
    outputDiv.innerText = "The substraction of the given numbers is : " + minus;
}

function multiplication() {
    var multiply = Number(inputOne.value) * Number(inputTwo.value);
    console.log(multiply);
    outputDiv.innerText = "The multiplication of the given numbers is : " + multiply;
}

function division() {
    var divide = Number(inputOne.value) / Number(inputTwo.value);
    console.log(divide);
    outputDiv.innerText = "The division of the given numbers is : " + divide;
}