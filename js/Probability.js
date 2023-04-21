function makeDecision() {
    var side1Wins = 100; // set statistics
    var side2Wins = 50;
    var criteria = 0.8; // set criteria

    var randomNum = Math.random() * 100; // generate a random number between 0 and 100
    var selectedFighter = document.getElementById("fighter").value; // get the selected fighter from the drop-down list

    if (selectedFighter === "Gervonta Davis") {
        side1Wins = 100; // update statistics based on selected fighter
        side2Wins = 50;
    } else if (selectedFighter === "Ryan Garcia") {
        side1Wins = 50;
        side2Wins = 100;
    }

    if (randomNum < side1Wins) {
        document.getElementById("result").innerHTML = "Chose " + selectedFighter + "<br>"; // if random number is less than side1Wins, choose side 1
    } else if (randomNum < side2Wins) {
        document.getElementById("result").innerHTML = "Chose " + selectedFighter + "<br>" ; // if random number is less than side2Wins, choose side 2
    }

    if (side1Wins >= criteria * 100) {
        document.getElementById("result").innerHTML += "Recommended fighter: " + selectedFighter; // if side1Wins meets or exceeds the set criteria, recommend selected fighter
    } else if (side2Wins >= criteria * 100) {
        document.getElementById("result").innerHTML += "Recommended fighter: the opponent"; // if side2Wins meets or exceeds the set criteria, recommend opponent
    }
}