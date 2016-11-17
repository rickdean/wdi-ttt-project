'use strict';

let data = {
  "game": {
    "cell": {
      "index": '',
      "value": 'x',
    },
    "over": false,
  }
};

let $boxes = $('.box');
let turn = "X";
let moves = 0;

// game reset
let resetGame = function() {
  $boxes.text('');
  $boxes.removeClass('X');
  $boxes.removeClass('O');
  $('.wrap-board').show();
  //$('.button-wrapper').hide();
  turn = 'X';
  moves = 0;
  $('.message').text('Play Again? Click the "Here" Button again :)');
  $('.message')[0].style.fontSize = '20px';
};


let changeTurn = function() {
  if (turn === 'X') {
    turn = 'O';
    data.game.cell.value = 'x';
  } else {
    turn = 'X';
    data.game.cell.value = 'o';
  }
};


$boxes.on('click', function() {

  if ($(this).text() === '') {
    $(this).text(turn);
    $(this).addClass(turn);
    data.game.cell.index = $(this).data("index");
    moves += 1;


    let allThree = function($firstBox, $secondBox, $thirdBox) {
      let firstBoxOwner = $firstBox.text(),
        secondBoxOwner = $secondBox.text(),
        thirdBoxOwner = $thirdBox.text();

      if ((firstBoxOwner === secondBoxOwner) && (secondBoxOwner === thirdBoxOwner)) {
        if (firstBoxOwner === "X") {
          data.game.over = true;
          return "X";
        } else if (firstBoxOwner === "O") {
          data.game.over = true;
          return "O";
        }
      }
      return null;
    };


    let diagonalWinner = function() {
      let leftDownDiag = allThree($boxes.eq(0), $boxes.eq(4), $boxes.eq(8));
      let rightUpDiag = allThree($boxes.eq(2), $boxes.eq(4), $boxes.eq(6));
      return leftDownDiag || rightUpDiag;
    };


    let columnWinner = function() {
      let leftCol = allThree($boxes.eq(0), $boxes.eq(3), $boxes.eq(6));
      let middleCol = allThree($boxes.eq(1), $boxes.eq(4), $boxes.eq(7));
      let rightCol = allThree($boxes.eq(2), $boxes.eq(5), $boxes.eq(8));

      return leftCol || (middleCol || rightCol);
    };

    let rowWinner = function() {
      let topRow = allThree($boxes.eq(0), $boxes.eq(1), $boxes.eq(2));
      let middleRow = allThree($boxes.eq(3), $boxes.eq(4), $boxes.eq(5));
      let bottomRow = allThree($boxes.eq(6), $boxes.eq(7), $boxes.eq(8));

      return topRow || (middleRow || bottomRow);
    };



    let getWinner = function() {
      return diagonalWinner() || (rowWinner() || columnWinner());
    };

    let winner = getWinner();
    if (winner) {
      $('.wrap-board').hide(500);
      $('.message')[0].style.fontSize = "50px";
      $('.message').text("Player " + winner + " won!");
      $('.button-wrapper').show();

    } else if (moves < 9) {
      changeTurn();
    } else {
      $('.wrap-board').hide(500);
      $('.message')[0].style.fontSize = "50px";
      $('.message').text("Cat's Game");
      $('.button-wrapper').show();

    }
  }
});

let getData = function() {
  return data;
};

$('#reset').on('click', function() {
  resetGame();
});

const calcCompletedGames = (data) => {
  let completedGames = 0;
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].over) {
      completedGames++;
    }
  }
  return completedGames;
};

module.exports = {
  getData,
  calcCompletedGames,
};
