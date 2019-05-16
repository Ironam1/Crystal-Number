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
}

//function for display image will show crystals
function setDisplay() {
    $("#comp-score").html(targetNumber);
    $("#user-score").html(userTotal);

}
    //this will assign the values to each crystal
    //this will add consecutively the total for each click on the crystal


//function to compare user total to target number
    //if user total = target number user wins, if user total is more than 
    //target user looses

//the game will reset on win or loss but retain their totals