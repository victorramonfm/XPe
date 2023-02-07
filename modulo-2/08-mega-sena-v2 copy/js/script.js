const state = {
  board: [],
  currentGame: [],
  savedGames: [],
};

function start() {
  readLocalStorage();
  createBoard();
  resetGame();
  render();
}

function readLocalStorage() {
  if (!window.localStorage) {
    return;
  }

  var savedGamesFromLocalStorage = window.localStorage.getItem("saved-games");

  if (savedGamesFromLocalStorage) {
    state.savedGames = JSON.parse(savedGamesFromLocalStorage);
  }
}

function writeToLocalStorage() {
  window.localStorage.setItem("saved-games", JSON.stringify(state.savedGames));
}

function createBoard() {
  state.board = [];

  for (let index = 1; index <= 60; index++) {
    state.board.push(index);
  }
}

function newGame() {
  resetGame();
}

function render() {
  renderBoard();
  renderButtons();
  renderSavedGames();
}

function renderBoard() {
  var divBoard = document.querySelector("#megasena-board");
  divBoard.innerHTML = "";

  var ulNumbers = document.createElement("ul");
  ulNumbers.classList.add("numbers");

  for (let index = 0; index < state.board.length; index++) {
    var currentNumber = state.board[index];

    var liNumber = document.createElement("li");
    liNumber.textContent = currentNumber;
    liNumber.classList.add("number");

    liNumber.addEventListener("click", handleNumberClick);

    if (isNumberInGame(currentNumber)) {
      liNumber.classList.add("selected-number");
    }

    ulNumbers.appendChild(liNumber);
  }

  divBoard.appendChild(ulNumbers);
}

function renderButtons() {
  var divButtons = document.querySelector("#megasena-buttons");
  divButtons.innerHTML = "";

  var buttonNewGame = createButton("Novo Jogo");
  var buttonRandomGame = createButton("Jogo Aleatório");
  var buttonSaveGame = createButton("Salvar Jogo");

  divButtons.appendChild(buttonNewGame);
  divButtons.appendChild(buttonRandomGame);
  divButtons.appendChild(buttonSaveGame);
}

function createButton(buttonContent) {
  var button = document.createElement("button");
  button.textContent = buttonContent;

  if (buttonContent == "Novo Jogo") {
    button.addEventListener("click", newGame);
  }
  if (buttonContent == "Jogo Aleatório") {
    button.addEventListener("click", randomGame);
  }
  if (buttonContent == "Salvar Jogo") {
    button.disabled = !isGameComplete();
    button.addEventListener("click", saveGame);
  }

  return button;
}

function renderSavedGames() {
  var divSavedGames = document.querySelector("#megasena-saved-games");
  divSavedGames.innerHTML = "";

  if (state.savedGames.length == 0) {
    divSavedGames.innerHTML = "<p>Nenhum Jogo Salvo</p>";
  } else {
    var olSavedGames = document.createElement("ol");

    for (let index = 0; index < state.savedGames.length; index++) {
      var currentGame = state.savedGames[index];

      var liGame = document.createElement("li");
      liGame.textContent = currentGame.join(", ");

      olSavedGames.appendChild(liGame);
    }

    divSavedGames.appendChild(olSavedGames);
  }
}

function handleNumberClick(event) {
  var value = Number(event.currentTarget.textContent);

  if (isNumberInGame(value)) {
    removeNumberFromGame(value);
  } else {
    addNumberToGame(value);
  }
  render();
}

function addNumberToGame(numberToAdd) {
  if (numberToAdd < 1 || numberToAdd > 60) {
    console.error("Número inválido", numberToAdd);
    return;
  }

  if (state.currentGame.length >= 6) {
    console.error("O jogo já está completo.");
    return;
  }

  if (isNumberInGame(numberToAdd)) {
    return;
  }

  state.currentGame.push(numberToAdd);
}

function removeNumberFromGame(numberToRemove) {
  if (numberToRemove < 1 || numberToRemove > 60) {
    console.error("Número inválido", numberToRemove);
    return;
  }

  if (state.currentGame.length < 0) {
    console.error("O jogo não possui nenhum número.");
    return;
  }

  var newGame = [];

  for (let index = 0; index < state.currentGame.length; index++) {
    const currentNumber = state.currentGame[index];

    if (currentNumber == numberToRemove) {
      continue;
    }

    newGame.push(currentNumber);
  }

  state.currentGame = newGame;
}

function isNumberInGame(numberToCheck) {
  return state.currentGame.includes(numberToCheck);
}

function saveGame() {
  if (!isGameComplete()) {
    console.error("O jogo não está completo!");
    return;
  }

  state.savedGames.push(state.currentGame);
  writeToLocalStorage();
  newGame();
  render();
}

function isGameComplete() {
  return state.currentGame.length == 6;
}

function resetGame() {
  state.currentGame = [];
}

function randomGame() {
  newGame();

  while (!isGameComplete()) {
    var randomNumber = Math.ceil(Math.random() * 60);
    addNumberToGame(randomNumber);
  }

  render();
}

start();
