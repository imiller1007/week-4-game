//Global Variables--------------------------------------------------
var randomNum = 0;
var blueNum = 0;
var pinkNum = 0;
var greenNum = 0;
var redNum = 0;
var myNum = 0;
var buttonClicked = false;


var wins = 0;
var losses = 0;

//Functions-----------------------------------------------------------
function startGame(){
    randomNum = Math.floor(Math.random() * (120 - 19) + 19);
    blueNum = Math.floor(Math.random() * (12 - 1) + 1);
    pinkNum = Math.floor(Math.random() * (12 - 1) + 1);
    greenNum = Math.floor(Math.random() * (12 - 1) + 1);
    redNum = Math.floor(Math.random() * (12 - 1) + 1);
    $("#randy").html(randomNum);
    
    //reset
    myNum= 0;
    $("#myScore").html(myNum);
    buttonClicked = false;
}

//Main process-----------------------------------------------------------
startGame();
console.log(blueNum);
console.log(pinkNum);
console.log(greenNum);
console.log(redNum);
console.log(buttonClicked);



$("#blue").on("click", function(){
    buttonClicked = true;
    myNum = myNum + blueNum;
    $("#myScore").html(myNum);
    if (buttonClicked===true && myNum===randomNum){
        wins++;
        $("#winCount").html(wins);
        alert("You disarmed the bomb!");
        startGame();
    }

    else if (buttonClicked===true && myNum>randomNum){
        losses++;
        $("#lossCount").html(losses);
        alert("The bomb was detonated...");
        startGame();
    }
    });


$("#pink").on("click", function(){
    buttonClicked = true;
    myNum = myNum + pinkNum;
    $("#myScore").html(myNum);
    if (buttonClicked===true && myNum===randomNum){
        wins++;
        $("#winCount").html(wins);
        alert("You disarmed the bomb!");
        startGame();
    }

    else if (buttonClicked===true && myNum>randomNum){
        losses++;
        $("#lossCount").html(losses);
        alert("The bomb was detonated...");
        startGame();
    }
    });

$("#green").on("click", function(){
    buttonClicked = true;
    myNum = myNum + greenNum;
    $("#myScore").html(myNum);
    if (buttonClicked===true && myNum===randomNum){
        wins++;
        $("#winCount").html(wins);
        alert("You disarmed the bomb!");
        startGame();
    }

    else if (buttonClicked===true && myNum>randomNum){
        losses++;
        $("#lossCount").html(losses);
        alert("The bomb was detonated...");
        startGame();
    }
    });

$("#red").on("click", function(){
    buttonClicked = true;
    myNum = myNum + redNum;
    $("#myScore").html(myNum);
    if (buttonClicked===true && myNum===randomNum){
        wins++;
        $("#winCount").html(wins);
        alert("You disarmed the bomb!");
        startGame();
    }

    else if (buttonClicked===true && myNum>randomNum){
        losses++;
        $("#lossCount").html(losses);
        alert("The bomb was detonated...");
        startGame();
    }
    });















    




//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



