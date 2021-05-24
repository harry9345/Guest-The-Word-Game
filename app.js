var wordInput = document.getElementById("wordInput");
var checkBtn = document.getElementById("checkBtn");
var answer = document.getElementById("answer");
var p = document.createElement("P");
var hintBtn = document.getElementById("hintBtn");
let hintBox = document.getElementById("hint");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let timer = document.getElementById("timer");
let scoreBox = document.getElementById("score");

const wordBank = ["red", "blue", "green"];

let score = 0;
var inter = null;

function countDown() {
  timer.innerText = "Let's Start the Game";
  timer.style.color = "black";
  let timeLeft = 10;
  wordInput.disabled = false;

  inter = setInterval(() => {
    if (timeLeft <= 0) {
      timer.innerText = "Times Up!! ";
      wordInput.disabled = true;
    } else {
      timer.innerText = timeLeft + " second remaining ";
    }
    timeLeft -= 1;
  }, 1000);
}

startBtn.addEventListener("click", countDown);
resetBtn.addEventListener("click", function () {
  timer.innerText = "Let's Try Again";
  score = 0;
  scoreBox.innerText = "";
  clearInterval(inter);
});

checkBtn.addEventListener("click", function checkWords() {
  if (wordInput.value == "") {
    alert("please enter your guest");
  } else {
    compareInput();
  }
});

function compareInput() {
  answer.appendChild(p);
  if (wordBank.includes(wordInput.value)) {
    switch (wordInput.value) {
      case "red":
        timer.innerText = "Yes! congratulations it was Red";
        timer.style.color = "red";
        clearInterval(inter);
        scoreBox.innerText = score += 1;
        wordInput.disabled = true;
        break;
      case "blue":
        timer.innerText = "Yes! congratulations it was Blue";
        timer.style.color = "blue";
        clearInterval(inter);
        scoreBox.innerText = score += 1;
        wordInput.disabled = true;
        break;
      case "green":
        timer.innerText = "Yes! congratulations it was Green";
        timer.style.color = "green";
        clearInterval(inter);
        scoreBox.innerText = score += 1;
        wordInput.disabled = true;
        break;
    }
    wordInput.value = "";
  } else {
    p.innerHTML = "please try Again";
    wordInput.value = "";
  }
}

hintBtn.addEventListener("click", function () {
  let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  let wordToArray = randomWord.split("");
  wordToArray[Math.floor(Math.random() * wordToArray.length)] = "*";
  let staredWord = wordToArray.join("");
  hintBox.innerHTML = staredWord;
});
