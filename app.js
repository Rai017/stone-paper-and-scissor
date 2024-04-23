let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice = ()=> {
    const options = ["stone","paper","scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];

};
const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again."
};
const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = "You win!";

    } else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = "You lose!";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if (userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        } else {
            compChoice === "stone" ? false : true;
        }
        showWinner(userWin)
    }



};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
     const userChoice = choice.getAttribute("id");
     playGame(userChoice);

    });
})

