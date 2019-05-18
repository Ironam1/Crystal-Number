//establish variables
var targetNumber = 0;
var userTotal = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var wins = 0;
var losses = 0;


//function to start game
    //this will set the target number and set values for the crystals
function startGame () {
    targetNumber = Math.floor((Math.random() * 31) + 20);
    console.log(targetNumber);
    crystal1 = Math.floor((Math.random() * 5) + 6);
    crystal2 = Math.floor((Math.random() * 3) + 3);
    crystal3 = Math.floor((Math.random() * 3) + 1);
    crystal4 = Math.floor((Math.random() * 3) + 7);
    console.log(crystal1);
    userTotal = 0;
    console.log("start " + userTotal);
    setDisplay();
    playGame(); 
}

    

//function setDisplay to reset target number and user total
function setDisplay() {
    userTotal = 0;
    $("#comp-score").html(targetNumber);
    $("#user-score").html(userTotal);
    console.log("middle " + userTotal);
}

function win () {
    alert("YOU WIN!");
    wins++;
    $("#wins").text(wins);
    startGame();
    setDisplay();
}   
    
function loss () {
    alert("YOU LOSE!");
    losses++;
    $("#losses").text(losses);
    startGame();
    setDisplay();
}
console.log("next " + crystal1)
    //function playGame each click on cyrstal will add consecutively
function playGame () {
    $("#one").on ('click', function (){
        userTotal = userTotal + crystal1;
        console.log("new " + userTotal);
        $("#user-score").text(userTotal);
            if (userTotal === targetNumber) {
                win();
            } else if (userTotal > targetNumber) {
                loss();
        }
    })
    $("#two").on ('click', function (){
        userTotal = userTotal + crystal2;
        console.log("new " + userTotal);
        $("#user-score").text(userTotal);
            if (userTotal === targetNumber) {
                win();
            } else if (userTotal > targetNumber) {
                loss();
        }
    })
    $("#three").on ('click', function (){
        userTotal = userTotal + crystal3;
        console.log("new " + userTotal);
        $("#user-score").text(userTotal);
            if (userTotal === targetNumber) {
                win();
            } else if (userTotal > targetNumber) {
                loss();
        }
    })
    $("#four").on ('click', function (){
        userTotal = userTotal + crystal4;
        console.log("new " + userTotal);
        $("#user-score").text(userTotal);
            if (userTotal === targetNumber) {
                win();
            } else if (userTotal > targetNumber) {
                loss();
        }
    
    })
}

    //this will assign the values to each crystal
    
    //this will add consecutively the total for each click on the crystal
//add function?
    

//function to compare user total to target number
    //if user total = target number user wins, if user total is more than 
    //target user looses

//the game will reset on win or loss but retain their totals