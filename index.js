// create reandom number for each dice & display image
var winnerText = document.getElementById("winner-text"); 

// Start game with button 

document.getElementById("button").onclick = function() {
  randomDiceRoll();
}

function randomDiceRoll () {
    var diceOneRoll = Math.round(Math.random() *5) + 1;
    var diceTwoRoll = Math.round(Math.random() *5) + 1;
    var diceOneImg = document.getElementById("dice-1");
    var diceTwoImg = document.getElementById("dice-2");
    diceOneImg.setAttribute("src", "images/dice" + diceOneRoll + ".png");
    diceTwoImg.setAttribute("src", "images/dice2_" + diceTwoRoll + ".png");
    if (diceOneRoll > diceTwoRoll) {
        winnerText.innerHTML = "Player 1 Is The Winner!"


    } else if(diceOneRoll < diceTwoRoll) {
        winnerText.innerHTML = "Player 2 Is The Winner!"

    } else
        winnerText.innerHTML = "It's A Draw!"
    }


