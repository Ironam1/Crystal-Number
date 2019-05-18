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
    crystal1 = 0;
    crystal2 = 0;
    crystal3 = 0;
    crystal4 = 0;
    crystal1 = Math.floor((Math.random() * 5) + 6);
    crystal2 = Math.floor((Math.random() * 3) + 3);
    crystal3 = Math.floor((Math.random() * 3) + 1);
    crystal4 = Math.floor((Math.random() * 3) + 7);
    console.log(crystal1);
    userTotal = 0;
    console.log("start " + userTotal);
    setDisplay();  
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
    $("#wins").text("Wins total: " + wins);
    startGame();
    
}   
    
function loss () {
    alert("YOU LOSE!");
    losses++;
    $("#losses").text("Loss total: " + losses);
    startGame();
    
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
