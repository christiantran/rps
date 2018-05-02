var choices = ["rock", "paper", "scissors"];

//computer to chose a random rps

function makeCompChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
    }

function play(playerChoice) {

    var computerChoice = makeCompChoice();

    //compare the choices to determine winner

    if (playerChoice == computerChoice) {
        drawResults(playerChoice, computerChoice, "tie");
    
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        drawResults(playerChoice, computerChoice, "Player Win!");
    
    }else if (playerChoice == "rock" && computerChoice == "paper") {
        drawResults(playerChoice, computerChoice, "Player Loses!");
    
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        drawResults(playerChoice, computerChoice, "Player Loses!");
    
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        drawResults(playerChoice, computerChoice, "Player Win!");
    
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        drawResults(playerChoice, computerChoice, "Player Loses!");
    
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        drawResults(playerChoice, computerChoice, "Player Win!");
    }

}

function drawResults(pc, cc, res) {

    //player choice vs comp choice
    document.getElementById("choices").innerText = `Player: ${pc} vs. Computer: ${cc}`;

    //result
    document.getElementById("results").innerText = `and the results... ${res}`;

}