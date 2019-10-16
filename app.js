/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
// document.querySelector('#current-' + activePlayer).textContent = dice; //Change content 
// // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>' //Implement HTML//

// // Getter because we get the value//
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

//Manipulate style with querySelector
document.querySelector('.dice').style.display = 'none'

// function btn() {
//     //Do something
// }
// //Call back function//
// document.querySelector('.btn-roll').addEventListener('click',btn)

document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'

//Anonymous Function//
document.querySelector('.btn-roll').addEventListener('click', function () {
    //random number//
    var dice = Math.floor(Math.random() * 6) + 1;
    //display the result
    var diceDom =document.querySelector('.dice')
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png'
    //update the round score
    if (dice !== 1) {
        //add score
        roundScore += dice;
        // roundScore = roundScore + dice // same thing than ligne up just different operator//
        document.querySelector('#current-' + activePlayer).textContent = roundScore
    } else {
        //ternary operator
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
        roundScore = 0;

        document.getElementById('current-0').textContent = '0'
        document.getElementById('current-1').textContent = '0'

        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active')

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active')
        document.querySelector('.dice').style.display = 'none'

    }


    
})