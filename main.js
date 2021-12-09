let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");

const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButtom;

console.log(randomNumber);
function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Intentos anteriores: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "¡Felicidades! ¡Lo adivinaste! Eres un crack";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!Fin del juego!!!";
    setGameOver();
  } else {
    lastResult.textContent = "Incorrecto";
    lastResult.style.backgroundColor = "red";
    //puede funcionar asi xd o cambiar por else if...
    userGuess < randomNumber
      ? (lowOrHi.textContent = "¡El número es muy bajo!")
      : (lowOrHi.textContent = "¡El número es muy grande!");
  }
  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disable = true;
  guessSubmit.disable = true;
  resetButtom = document.createElement("buttom");
  resetButtom.textContent = "Iniciar nuevo juego";
  document.body.append(resetButtom);
  resetButtom.addEventListener("click", resetGame);
}
function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }
  resetButtom.parentNode.removeChild(resetButtom);

  guessField.disable = false;
  guessSubmit.disable = false;
  guessField.value = ''
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random()*100)+1
}

