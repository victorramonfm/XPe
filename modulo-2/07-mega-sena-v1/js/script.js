const state = {
  board: [],
  currentGame: [],
  savedGames: [],
};

function start() {
  addNumberToGame(1);
  addNumberToGame(2);
  addNumberToGame(3);
  addNumberToGame(4);
  addNumberToGame(5);
  saveGame()
  addNumberToGame(10);
  saveGame()

  console.log(state.currentGame);
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
    console.log("O número já está presente no jogo", numberToAdd);
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

  state.savedGames.push(state.currentGame)
}

function isGameComplete() {
  return state.currentGame.length == 6;
}

start();
