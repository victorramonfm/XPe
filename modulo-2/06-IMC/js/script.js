function start() {
  var buttonCalculateIMC = document.querySelector("#button-calculate-imc");
  var inputHeight = document.querySelector("#input-height");
  var inputWeight = document.querySelector("#input-weight");

  buttonCalculateIMC.addEventListener("click", handleButtonClick);
  inputWeight.addEventListener("input", handleButtonClick);
  inputHeight.addEventListener("input", handleButtonClick);

  handleButtonClick();
}

function calculateIMC(weight, height) {
  var altura = document.getElementById("altura");
  var peso = document.getElementById("peso");

  return weight / height ** 2;
}

function handleButtonClick() {
  var inputWeight = document.querySelector("#input-weight");
  var inputHeight = document.querySelector("#input-height");
  var imcResult = document.querySelector("#imc-result");
  
  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
  var imc = calculateIMC(weight, height);
   
  imcResult.textContent = imc.toFixed(2).replace(".", ",");
}

start();
