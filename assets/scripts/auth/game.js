'use strict';

$(document).ready(function() {

  let game = {
    xTurn: true,
    currentGameMoves: 0,
    currentCellId: null,
    currentGame: null,
  };

  // declare all boxes
  let $boxes = $('.box');

  // player "X" goes first
  let turn = "X";

  // move count should start at '0'
  let moves = 0;

  // game reset
  let resetGame = function() {

    $boxes.text("");
    $boxes.removeClass("X");
    $boxes.removeClass("O");

    // reset the counters created above
    turn = "X";
    moves = 0;

    //reset messages
    $('.message').text('Play Again?');
    $('.message')[0].style.fontSize="20px";
  };


  // keep track of player switching
  let changeTurn = function() {
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  };

  // clicking rules
  //start to see of box is empty
  //if box is not empty then continue with the turn
  $boxes.on('click', function() {

    if ($(this).text() === "") {
      $(this).text(turn);
      $(this).addClass(turn);
  //after each turn add to the counter variable set above
      moves += 1;


      // Finding a Winner //

      //I found this strategy of assigning boxes to a player
      //the next step is to see if the same player owns the
      //three returneboxes

      let allThree = function($firstBox, $secondBox, $thirdBox) {
       let firstBoxOwner = $firstBox.text(),
            secondBoxOwner = $secondBox.text(),
            thirdBoxOwner = $thirdBox.text();

        if ((firstBoxOwner === secondBoxOwner) && (secondBoxOwner === thirdBoxOwner)){
          if (firstBoxOwner === "X"){
            return "X";
          } else if (firstBoxOwner === "O"){
            return "O";
          }
        }
        return null;
      };

  //winner assignment
  //if there is no winner play continues
  let diagonalWinner = function() {
    // the eq method is how we "index into" a jQuery collection!
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
  // Set Message
        $('.message')[0].style.fontSize="50px";
        $('.message').text("Player " + winner + " won!");
      } else if (moves < 9) {
        changeTurn();
      } else {
        $('.message')[0].style.fontSize="50px";
        $('.message').text("Cat's Game");
      }
    }
  });
  //game reset

  $('#reset').on('click', function() {
    resetGame();
  });


});
