let move = JSON.parse(localStorage.getItem('move1')) || 'o';
let player = JSON.parse(localStorage.getItem('player1')) || 'player1';
let playerMoves = JSON.parse(localStorage.getItem('playerMoves1')) || {
  box1: '.',
  box2: '.',
  box3: '.',
  box4: '.',
  box5: '.',
  box6: '.',
  box7: '.',
  box8: '.',
  box9: '.'
};

let playerBox = {
  box11: '',
  box12: '',
  box13: '',
  box14: '',
  box15: '',
  box16: '',
  box17: '',
  box18: '',
  box19: ''
};

let boxes = [
  {
    id: 'box1',
  }, {
    id: 'box2',
  }, {
    id: 'box3',
  }, {
    id: 'box4',
  }, {
    id: 'box5',
  }, {
    id: 'box6',
  }, {
    id: 'box7',
  }, {
    id: 'box8',
  }, {
    id: 'box9',
  },
]

const boxContainer = document.querySelector('.box-container');

let boxHTML;

  boxHTML = `
    <div>
        <button class="box1 box" data-box-id-${'box1'}><span class="text-box">.</span></button>
        <button class="box2 box" data-box-id-${'box2'}>.</button>
        <button class="box3 box" data-box-id-${'box3'}>.</button>
      </div>

      <div>
        <button class="box4 box" data-box-id-${'box4'}>.</button>
        <button class="box5 box" data-box-id-${'box5'}>.</button>
        <button class="box6 box" data-box-id-${'box6'}>.</button>
      </div>

      <div>
        <button class="box7 box" data-box-id-${'box7'}>.</button>
        <button class="box8 box" data-box-id-${'box8'}>.</button>
        <button class="box9 box" data-box-id-${'box9'}>.</button>
      </div>
  `
boxContainer.innerHTML = boxHTML;

/*assigning player move just saving it in a object */
function assigningPlayerMoves(box) {
  if (box === 'box1' && playerMoves.box1 === '.') {
    playerMoves.box1 = move;
    playerBox.box11 = 'box1'
    alternateOAndX();
  } else if  (box === 'box2' && playerMoves.box2 === '.') {
    playerMoves.box2 = move;
    alternateOAndX();
  } else if (box === 'box3' && playerMoves.box3 === '.') {
    playerMoves.box3 = move;
    alternateOAndX();
  }  else if (box === 'box4' && playerMoves.box4 === '.') {
    playerMoves.box4 = move;
    alternateOAndX();
  }  else if (box === 'box5' && playerMoves.box5 === '.') {
    playerMoves.box5 = move;
    alternateOAndX();
  }  else if (box === 'box6' && playerMoves.box6 === '.') {
    playerMoves.box6 = move;
    alternateOAndX();
  }  else if (box === 'box7' && playerMoves.box7 === '.') {
    playerMoves.box7 = move;
    alternateOAndX();
  }  else if (box === 'box8' && playerMoves.box8 === '.') {
    playerMoves.box8 = move;
    alternateOAndX();
  }  else if (box === 'box9' && playerMoves.box9 === '.') {
    playerMoves.box9 = move;
    alternateOAndX();
  } 
 
  console.log(playerMoves);
  checkWhoWins();
  
}

/*ONCLICK ON EACH BUTTON AHAHA*/

document.querySelector('.box1')
  .addEventListener('click', () => {
    assigningPlayerMoves('box1');
    generatingMovesHTML(playerBox.box11, playerMoves.box1)
    saveToStorageWhenclick();
});
document.querySelector('.box2')
  .addEventListener('click', () => {
    assigningPlayerMoves('box2');
    generatingMovesHTML('box2', move)
    saveToStorageWhenclick();
});
document.querySelector('.box3')
  .addEventListener('click', () => {
    assigningPlayerMoves('box3');
    generatingMovesHTML('box3', move)
    saveToStorageWhenclick();
});
document.querySelector('.box4')
  .addEventListener('click', () => {
    assigningPlayerMoves('box4');
    generatingMovesHTML('box4', move)
    saveToStorageWhenclick();
});
document.querySelector('.box5')
  .addEventListener('click', () => {
    assigningPlayerMoves('box5');
    generatingMovesHTML('box5', move)
    saveToStorageWhenclick();
});
document.querySelector('.box6')
  .addEventListener('click', () => {
    assigningPlayerMoves('box6');
    generatingMovesHTML('box6', move)
    saveToStorageWhenclick();
});
document.querySelector('.box7')
  .addEventListener('click', () => {
    assigningPlayerMoves('box7');
    generatingMovesHTML('box7', move)
    saveToStorageWhenclick();
});
document.querySelector('.box8')
  .addEventListener('click', () => {
    assigningPlayerMoves('box8');
    generatingMovesHTML('box8', move)
    saveToStorageWhenclick();
});
document.querySelector('.box9')
  .addEventListener('click', () => {
    assigningPlayerMoves('box9');
    generatingMovesHTML('box9', move)
    saveToStorageWhenclick();
});

function checkWhoWins() {
  if (playerMoves.box1 === playerMoves.box2 && playerMoves.box1 === playerMoves.box3 && playerMoves.box1 !== '.') {
    triggerYouWinPopup();
    addScore();
  } else if (playerMoves.box4 === playerMoves.box5 && playerMoves.box4 === playerMoves.box6 && playerMoves.box4 !== '.') {
    triggerYouWinPopup();
    addScore();
  } else if (playerMoves.box7 === playerMoves.box8 && playerMoves.box7 === playerMoves.box9 && playerMoves.box7 !== '.') {
    triggerYouWinPopup();
    addScore();
  } else if (playerMoves.box7 === playerMoves.box5 && playerMoves.box7 === playerMoves.box3 && playerMoves.box7 !== '.') {
    triggerYouWinPopup();
    addScore();
  } else if (playerMoves.box1 === playerMoves.box5 && playerMoves.box1 === playerMoves.box9 && playerMoves.box1 !== '.') {
    triggerYouWinPopup();
    addScore();
  } else if (playerMoves.box1 === playerMoves.box4 && playerMoves.box1 === playerMoves.box7 && playerMoves.box1 !== '.') {
    triggerYouWinPopup();
    addScore();
  } else if (playerMoves.box2 === playerMoves.box5 && playerMoves.box2 === playerMoves.box8 && playerMoves.box2 !== '.') {
    triggerYouWinPopup();
    addScore();
  } else if (playerMoves.box3 === playerMoves.box6 && playerMoves.box3 === playerMoves.box9 && playerMoves.box3 !== '.') {
    triggerYouWinPopup();
    addScore();
  }
}

function alternateOAndX() {
  if (move === 'o') {
    move = 'x';
    player = 'player2';
  } else if (move === 'x') {
    move = 'o';
    player = 'player1';
  } 
}



function generatingMovesHTML() {
    document.querySelector('.box1')
      .innerHTML = playerMoves.box1;
    document.querySelector('.box2')
      .innerHTML = playerMoves.box2;
    document.querySelector('.box3')
      .innerHTML = playerMoves.box3;
    document.querySelector('.box4')
      .innerHTML = playerMoves.box4;
    document.querySelector('.box5')
      .innerHTML = playerMoves.box5;
    document.querySelector('.box6')
      .innerHTML = playerMoves.box6;
    document.querySelector('.box7')
      .innerHTML = playerMoves.box7;
    document.querySelector('.box8')
      .innerHTML = playerMoves.box8;
    document.querySelector('.box9')
      .innerHTML = playerMoves.box9;
  console.log(move);
  generateScoreHTML();
}


////////ETO AND PARA SA YOU WIN POP UP////////

function resetGame() {
  function resetObject() {
  playerMoves.box1 = '.',
  playerMoves.box2 = '.',
  playerMoves.box3 = '.',
  playerMoves.box4 = '.',
  playerMoves.box5 = '.',
  playerMoves.box6 = '.',
  playerMoves.box7 = '.',
  playerMoves.box8 = '.',
  playerMoves.box9 = '.';
  }
  resetObject();
  

  function removeHTML() {
     document.querySelector('.box1')
      .innerHTML = '.';
      document.querySelector('.box2')
      .innerHTML = '.';
      document.querySelector('.box3')
      .innerHTML = '.';
      document.querySelector('.box4')
      .innerHTML = '.';
      document.querySelector('.box5')
      .innerHTML = '.';
      document.querySelector('.box6')
      .innerHTML = '.';
      document.querySelector('.box7')
      .innerHTML = '.';
      document.querySelector('.box8')
      .innerHTML = '.';
      document.querySelector('.box9')
      .innerHTML = '.';
  }
  removeHTML();
  saveToStorageWhenclick();
}

let youWinHTML= '';

function renderYouWinHTML() {
  youWinHTML = 
  `
  <div class="popup-youwin">
    <div>
    ${nextPlayer()} win! - ${nextMove()}
    </div>

    <div>
      <button class="nextround-button js-nextround-button">
        Proceed to Next round
      </button>
    </div>
  </div>
  `
  document.querySelector('.container-popup-youwin')
    .innerHTML = youWinHTML;

  document.querySelector('.js-nextround-button')
  .addEventListener('click', () => {
    toNextRoundHTML();
    resetGame();
  });
}


function triggerYouWinPopup() {
  renderYouWinHTML();
  document.querySelector('.popup-youwin')
    .classList.add('popup-youwin-opacity1');
}

function toNextRoundHTML() {
  document.querySelector('.popup-youwin')
    .classList.remove('popup-youwin-opacity1');
}

//document.querySelector('.js-nextround-button')
//  .addEventListener('click', () => {
 //   toNextRoundHTML();
 //   resetGame();
 // });

renderYouWinHTML();

/////ETO NAMAN ANG PARA SA PAG UPDATE NG SCORE////

let score = JSON.parse(localStorage.getItem('score1')) || {
  player1: 0,
  player2: 0
}



function saveToStorageWhenclick() {
  saveToStorage(score, 'score1');
  saveToStorage(move, 'move1');
  saveToStorage(playerMoves, 'playerMoves1');
  saveToStorage(player, 'player1');


  console.log(JSON.parse(localStorage.getItem('score1')));
  console.log(JSON.parse(localStorage.getItem('move1')));
  console.log(JSON.parse(localStorage.getItem('playerMoves1')));
  console.log(JSON.parse(localStorage.getItem('player1')));
}

saveToStorageWhenclick();

let scoreHTML;
generateScoreHTML();
generatingMovesHTML();
function generateScoreHTML() {
  scoreHTML = `
    <div class="score-div">SCORE: ${score.player1}</div>

    <div class="score-div">${player} Turn : Move: ${move}
    </div>

    <div class="score-div">SCORE: ${score.player2}</div>
  `

  document.querySelector('.score-container')
    .innerHTML = scoreHTML;
}

function nextMove() {
  let move1 = '';
  if (move === 'x') {
    move1 = 'O';
  } else if (move === 'o') {
    move1 = 'X';
  }
  return move1;
}

function nextPlayer() {
   let player1 = '';
  if (player === 'player1') {
    player1 = 'Player2';
  } else if (player === 'player2') {
    player1 = 'Player1';
  }
  return player1;
}

function addScore() {
  if (player === 'player2') {
    score.player1 += 1;
  } else if (player === 'player1') {
    score.player2 += 1;
  }
  generateScoreHTML();
}

function saveToStorage(save, name) {
  localStorage.setItem(`${name}`, JSON.stringify(save));
}

////////generate which move is next/////////

document.querySelector('.resetscore-button')
  .addEventListener('click', () => {
    score.player1 = 0;  
    score.player2 = 0;
    generateScoreHTML();
    saveToStorageWhenclick();
  }) 
document.querySelector('.resettie-button')
  .addEventListener('click', () => {
    resetGame();
  }) 

  
