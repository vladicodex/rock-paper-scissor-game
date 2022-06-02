const option = document.querySelectorAll(".option");
let playerScore = 0;
let computerScore = 0;

option.forEach((option) => {
    option.addEventListener("click", mainFunction);
});

function mainFunction(){
    const playerOption = this.value;
    const computerOptionRandom = ["rock", "paper", "scissors"];
    const computerOption = computerOptionRandom[Math.floor(Math.random() * 3)];
    
    updateMoves(playerOption, computerOption);
    compareOptions(playerOption, computerOption);
    updateScore();
    if(checkWinner()){
        playerScore = 0;
        computerScore = 0;
        updateScore();
    }
}

function updateMoves(playerOption, computerOption){
    document.getElementById("player-move").src = `img/${playerOption}.svg`;
    document.getElementById("computer-move").src = `img/${computerOption}.svg`;
}

function compareOptions(playerOption, computerOption) {
    const currentMatch = `PLAYER: ${playerOption} VS COMPUTER: ${computerOption}`;
    if (playerOption == computerOption) {
        alert(`${currentMatch} = Tie 🤝`);
        return;
    }

    if (playerOption == "rock") {
        if (computerOption == "scissors") {
            alert(`${currentMatch} = PLAYER Wins 💪​`);
            playerScore++;
        } else {
            alert(`${currentMatch} = COMPUTER Wins 🦾`);
            computerScore++;
        }
    }

    else if (playerOption == "paper") {
        if (computerOption == "rock") {
            alert(`${currentMatch} = PLAYER Wins 💪​`);
            playerScore++;
        } else {
            alert(`${currentMatch} = COMPUTER Wins 🦾`);
            computerScore++;
        }
    }

    else {
        if (computerOption == "paper") {
            alert(`${currentMatch} = PLAYER Wins 💪`);
            playerScore++;
        } else {
            alert(`${currentMatch} = COMPUTER Wins 🦾`);
            computerScore++;
        }
    }
}

function updateScore() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function checkWinner() {
    if (playerScore == 3 || computerScore == 3) {
        const winner =
            playerScore == 3
            ? "PLAYER WINS THE GAME! 💪🧑​"
            : "COMPUTER WINS THE GAME! 🦾🤖";
        alert(winner);
        return true;
    }
    return false;
}