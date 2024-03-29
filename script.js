const TicTacToe = (function(){
  let currentPlayer = "X";
  let gameBoard = createGameBoard();

  function createGameBoard(){
    return ["", "", "", "", "", "","", "",""];
  }

  function checkWinner(){
    const winCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let combination of winCombinations){
      const [a, b, c] = combination;
      if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
        return gameBoard[a];
      }
    }
      return null;
    
  };

  function makeMove(cellIndex){
    if (!gameBoard[cellIndex]) {
      gameBoard[cellIndex] = currentPlayer;
       currentPlayer = currentPlayer === "X" ? "O" : "X";
      return true;
    }
    return false;
  }

  function getGameBoard(){
    return [...gameBoard];
  }

  function getCurrentPlayer(){
    return currentPlayer;
  }

  function resetGame(){
    gameBoard = createGameBoard();
    currentPlayer = "X";
  }

  return{
    makeMove,
    getGameBoard,
    getCurrentPlayer,
    checkWinner,
    resetGame
  };
})();

TicTacToe.makeMove(0);
TicTacToe.makeMove(1);
TicTacToe.makeMove(4);
TicTacToe.makeMove(2);
TicTacToe.makeMove(8);
TicTacToe.makeMove(3);
TicTacToe.makeMove(4)
TicTacToe.makeMove(7);
TicTacToe.makeMove(8);

console.log(TicTacToe.getGameBoard());
console.log(TicTacToe.checkWinner());
console.log(TicTacToe.getCurrentPlayer());
TicTacToe.resetGame();