const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");

input.focus();

const resetGame = () => {
  randomNum = Math.floor(Math.random() * 100);
  chance = 10; 
  input.disabled = false; 
  remainChances.textContent = chance;
  guess.textContent = ""; 
  guess.style.color = "#333"; 
  input.value = ""; 
  checkButton.textContent = "Check"; 
};

let randomNum = Math.floor(Math.random() * 100);
let chance = 10;

checkButton.addEventListener("click", () => {
  if (input.disabled) {
  
    resetGame();
    return;
  }
  chance--; 
  let inputValue = input.value; 
  if (inputValue == randomNum) { 
    [guess.textContent, input.disabled] = ["Parabéns! Você encontrou o número.", true];
    [checkButton.textContent, guess.style.color] = ["Replay", "#27ae60"];
  } else if (inputValue > randomNum && inputValue < 100) { 
    [guess.textContent, remainChances.textContent] = ["Seu palpite é alto.", chance];
    guess.style.color = "#333";
  } else if (inputValue < randomNum && inputValue > 0) { 
    [guess.textContent, remainChances.textContent] = ["Seu palpite é baixo.", chance];
    guess.style.color = "#333";
  } else { 
    [guess.textContent, remainChances.textContent] = ["Seu número é inválido", chance];
    guess.style.color = "#e74c3c";
  }
  if (chance == 0) { 
    [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
    [guess.textContent, guess.style.color] = ["Você perdeu o jogo", "#e74c3c"];
  }
});