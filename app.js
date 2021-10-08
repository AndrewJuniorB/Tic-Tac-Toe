// the first move always starts with player X
const moves = ['X', '0'];
// the app detects a win or tie and displays an appropriate message
// a button resets the game for a new round of gameplay

// ******************************************************************************************

// Take each square which I click on
var playSquares = document.getElementById('table'); // returns an array-like object
// MAX steps is 9 keep track them
var stepsCounter = 0;
// WINNER
var winner = '???';

var content = document.getElementById('content');
var resultWindow = document.getElementById('result-window');
var overlay = document.getElementById('overlay');
var closeBtn = document.getElementById('close-btn');

var btn = document.getElementsByClassName('reset');


// CLICK EVENT
playSquares.addEventListener('click', function(event) {
  //console.log('CLICK')
  //console.log(event.target.innerHTML === ' ')
if (event.target.className = 'square') {
  if (event.target.innerHTML === ' ') {

    //console.log(event.target.innerHTML)
    // the first move always starts with player X (even - X , odd - O)
      if (stepsCounter % 2 === 0) {
        event.target.innerHTML = moves[0];
        stepsCounter += 1;
      } else {
        event.target.innerHTML = moves[1]
        stepsCounter += 1;
      }
      console.log('STEPS NOW:', stepsCounter);
      if (stepsCounter === 9) {
        // window.alert("TIE No Winners");
        showWinner("TIE No Winners");
      }

  }

}

  whoWon();
});



// helper function to check either X or 0 Player Won
const whoWon = () => {
  var squares = document.getElementsByClassName('square');
  //console.log('SQUARES', squares[2])
  // What ccombinations to WIN
  var wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for (var i = 0; i < wins.length; i ++) {
    if(
        squares[wins[i][0]].innerHTML === 'X' && squares[wins[i][1]].innerHTML === 'X' && squares[wins[i][2]].innerHTML === 'X'
      ){
        //console.log("X WIN");
        result = `WINNERS ${moves[0]}`;
        showWinner(result);
      } else if (
          squares[wins[i][0]].innerHTML === '0' && squares[wins[i][1]].innerHTML === '0' && squares[wins[i][2]].innerHTML === '0'
      ) {
        //console.log("0 WIN");
        result = `WINNERS ${moves[1]}`;
        showWinner(result);
      }
  //console.log(squares[0].id)
  }
}

const showWinner = (whoWin) => {
  // console.log(whoWin)
  //window.alert(whoWin);
  content.innerHTML = whoWin;
  resultWindow.style.display = 'block';
}


const closePopup = () => {
  resultWindow.style.display = 'none';
  //location.reload();
}

overlay.addEventListener('click', closePopup);
closeBtn.addEventListener('click', closePopup)