const options = ["rock","paper","scissors"];
const resultArray = ["draw", "win", "lose"];
let result = "";

//emoji state
const setEmojistatus = () => {
    if (result == "win"){
        document.getElementById("emoji").src = 
        "https://freepngimg.com/thumb/emoji/47426-8-smiley-hd-free-transparent-image-hd.png"
    }else if (result == "draw"){
        document.getElementById("emoji").src = 
        "https://freepngimg.com/thumb/emoji/8-2-fearful-emoji-png.png"
    }else if (result == "lose"){
        document.getElementById("emoji").src = 
        "https://freepngimg.com/thumb/emoji/58616-emoticon-angry-anger-emojis-sticker-emoji.png"
    }
};

const getComputerPlay = () => {
    const computerRandomNumber = Math.floor(Math.random() * 3);
    const computerChosenOption = options[computerRandomNumber];
    console.log("computerChosenOption", computerChosenOption);
    return computerChosenOption;
};

const gameLogic = (user) => {
    const computer = getComputerPlay();
     //logic
    if (computer == "rock" && user == "rock"){
        result = resultArray[0];
        console.log("result: draw");
    }else if (computer == "scissors" && user == "rock"){
        result = resultArray[1];
        console.log("result: win");
    }else  if(computer == "paper" && user == "rock") {
        result = resultArray[2];
        console.log("result: lose");
    }else if (computer == "rock" && user == "paper"){
        result = resultArray[1];
        console.log("result: win");
    }else if (computer == "scissors" && user == "paper"){
        result = resultArray[2];
        console.log("result:lose");
    }else if (computer == "paper" && user == "paper"){
        result = resultArray[0];
        console.log("result: draw");
    }else if (computer =="rock" && user == "scissors"){
        result = resultArray[2];
        console.log("result: lose");
    }else if (computer == "scissors" && user == "scissors"){
        result = resultArray[0];
        console.log("result:draw");
    }else if (computer == "paper" && user == "scissors"){
        result = resultArray[1];
        console.log("result: win");
    }
     
    console.log("computer Play:",computer);
    document.getElementById("computersChoice").innerHTML = computer;
    document.getElementById("result").innerHTML = result;
};

const rockOption = document
.getElementById("rock")
.addEventListener("click",function() {
    console.log("rock was clicked!");
    document.getElementById("userChoice").innerHTML ="rock";
    gameLogic("rock");
    setEmojistatus();
});

const paperOption = document
.getElementById("paper")
.addEventListener("click",function() {
    console.log("paper was clicked!");
    document.getElementById("userChoice").innerHTML ="paper";
    gameLogic("paper");
    setEmojistatus();
});

const scissorsOption = document
.getElementById("scissors")
.addEventListener("click",function() {
    console.log("scissors was clicked!");
    document.getElementById("userChoice").innerHTML ="scissors";
    gameLogic("scissors");
    setEmojistatus();
});

const reset = document
.getElementById("reset")
.addEventListener("click", function() {
    console.log("Reset");
    document.getElementById("computersChoice").innerHTML = "";
    document.getElementById("userChoice").innerHTML ="";
    document.getElementById("result").innerHTML ="";
});