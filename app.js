const options = ["rock","paper","scissors"];
const resultArray = ["draw", "win", "lose"];
let result = "";

const getComputerPlay = () => {
    const computerRandomNumber = Math.floor(Math.random() * 3);
    const computerChosenOption = options[computerRandomNumber];
    console.log("computerChosenOption", computerChosenOption);
    return computerChosenOption;
};

const gameLogic = (user) => {
    const computer = getComputerPlay();
    //logic
    if (computer == "rock" && user == "rock")
    result = resultArray[0];
    console.log("result: draw");

    
    console.log("computer choice:",computer);
    document.getElementById("computersChoice").innerHTML = computer;
};

const rockOption = document
.getElementById("rock")
.addEventListener("click",function() {
    console.log("rock was clicked!");
    document.getElementById("userChoice").innerHTML ="rock"
    gameLogic("rock");
});

const paperOption = document
.getElementById("paper")
.addEventListener("click",function() {
    console.log("paper was clicked!");
    document.getElementById("userChoice").innerHTML ="paper"
});

const scissorsOption = document
.getElementById("scissors")
.addEventListener("click",function() {
    console.log("scissors was clicked!");
    document.getElementById("userChoice").innerHTML ="scissors"
});