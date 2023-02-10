function start() {
  var inputFirstNumber = document.querySelector("#input-first-number");
  var inputSecondNumber = document.querySelector("#input-second-number");
  var buttonCalculate = document.querySelector("#button-calculate");

  inputFirstNumber.addEventListener("input", handleButtonClick);
  inputSecondNumber.addEventListener("input", handleButtonClick);
  buttonCalculate.addEventListener("click", handleButtonClick);

  handleButtonClick();
}

function handleButtonClick() {
  var inputFirstNumber = document.querySelector("#input-first-number");
  var inputSecondNumber = document.querySelector("#input-second-number");

  var firstNumber = Number(inputFirstNumber.value);
  var secondNumber = Number(inputSecondNumber.value);

  superCalculator(firstNumber, secondNumber);
}

function superCalculator(firstNumber, secondNumber) {
  renderSuperCalculator(firstNumber, secondNumber);
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return (a / b).toFixed(2);
}

function pow(a, b) {
  return a ** b;
}

function sqrt(a) {
  return (a ** (1 / 2)).toFixed(2);
}

function fact(a) {
  var factorial = 1;

  if (a == 0) {
    return 1;
  } else {
    while (a > 0) {
      factorial *= a;
      a--;
    }

    return factorial;
  }
}

function perc(a, b) {
  return div(a, b) * 100;
}

function avg(a, b) {
  return div(sum(a, b), 2);
}

function renderSuperCalculator(firstNumber, secondNumber) {
  var sumResult = document.querySelector(".sum");
  var subtractionResult = document.querySelector(".subtraction");
  var subtraction2Result = document.querySelector(".subtraction-2");
  var multiplicationResult = document.querySelector(".multiplication");
  var divisionResult = document.querySelector(".division");
  var division2Result = document.querySelector(".division-2");
  var powerResult = document.querySelector(".power");
  var power2Result = document.querySelector(".power-2");
  var squareRootResult = document.querySelector(".square-root");
  var squareRoot2Result = document.querySelector(".square-root-2");
  var factorialResult = document.querySelector(".factorial");
  var factorial2Result = document.querySelector(".factorial-2");
  var percentageResult = document.querySelector(".percentage");
  var percentage2Result = document.querySelector(".percentage-2");
  var averageResult = document.querySelector(".average");

  sumResult.textContent = sum(firstNumber, secondNumber);
  subtractionResult.textContent = sub(firstNumber, secondNumber);
  subtraction2Result.textContent = sub(secondNumber, firstNumber);
  multiplicationResult.textContent = mul(firstNumber, secondNumber);
  divisionResult.textContent = div(firstNumber, secondNumber);
  division2Result.textContent = div(secondNumber, firstNumber);
  powerResult.textContent = pow(firstNumber, secondNumber);
  power2Result.textContent = pow(secondNumber, firstNumber);
  squareRootResult.textContent = sqrt(firstNumber, secondNumber);
  squareRoot2Result.textContent = sqrt(secondNumber, firstNumber);
  factorialResult.textContent = fact(firstNumber, secondNumber);
  factorial2Result.textContent = fact(secondNumber, firstNumber);
  percentageResult.textContent = perc(firstNumber, secondNumber) + "%";
  percentage2Result.textContent = perc(secondNumber, firstNumber) + "%";
  averageResult.textContent = avg(firstNumber, secondNumber);
}

start();
