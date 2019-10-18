

var scores, roundScore, activePlayer , gamePlaying;

init();

// document.querySelector('#current-' + activePlayer).textContent = dice; //Change content 
// // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>' //Implement HTML//

// // Getter because we get the value//
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

//Manipulate style with querySelector

// function btn() {
//     //Do something
// }
// //Call back function//
// document.querySelector('.btn-roll').addEventListener('click',btn)


//Anonymous Function//
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        //random number//
        var dice = Math.floor(Math.random() * 6) + 1;
        //display the result
        var diceDom = document.querySelector('.dice')
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png'
        //update the round score
        if (dice !== 1) {
            //add score
            roundScore += dice;
            // roundScore = roundScore + dice // same thing than ligne up just different operator//
            document.querySelector('#current-' + activePlayer).textContent = roundScore
        } else {
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {
          // add the current score to global score//
    scores[activePlayer] += roundScore;

    //update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

    //CHECK IF PLAYER WOn THE GAME//
    if (scores[activePlayer] >= 10) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner'
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        nextPlayer()
    }
    }
});

function nextPlayer() {
            //ternary operator
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
        roundScore = 0;

        document.getElementById('current-0').textContent = '0'
        document.getElementById('current-1').textContent = '0'

        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active')

        // show class active for the player//
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active')
        //hide the dice
        document.querySelector('.dice').style.display = 'none'
}

function init() {
    scores = [0, 0]
    activePlayer = 0
    roundScore = 0
    document.querySelector('.dice').style.display = 'none'
    gamePlaying = true 

    // function btn() {
    //     //Do something
    // }
    // //Call back function//
    // document.querySelector('.btn-roll').addEventListener('click',btn)

    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}

document.querySelector('.btn-new').addEventListener('click',init)


//classList == add remove toogle