let userScore = 0;
let compScore = 0;
//modular way-->create a different function for every task
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
//generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    // Math.floor removes all digits after decimal point
    /*Math.random() generates a number between 0 to 1 randomly
    to generate for the range 0 to 2, we can multiply it by 3*/
};
const drawGame = () => {
    msg.innerText="IT'S A DRAW. PLAY AGAIN";
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin===true) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`YOU WIN!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        compScorePara.innerText=compScore;
        msg.style.backgroundColor="red";
        msg.innerText=`YOU LOSE. ${compChoice} beats your ${userChoice}`;
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice == compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //compChoice cannot be rock as it would have been a draw
            // either paper or scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //either rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});