const TicTacToe = (function(){
  let currentPlayer = {marker:  "X", name: "Player 1"};
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
      gameBoard[cellIndex] = currentPlayer.marker;
       currentPlayer = currentPlayer.marker === "X" ? {marker: "O", name: "Player 2"} : { marker: "X", name: "Player 1"};
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
    currentPlayer = {marker: "X", name: "Player 1"};
  }

  return{
    makeMove,
    getGameBoard,
    getCurrentPlayer,
    checkWinner,
    resetGame
  };
})();



document.addEventListener("DOMContentLoaded", function(){
  const cells = document.querySelectorAll(".cell");
  const resetButton = document.getElementById("reset-button");
  const messageElement = document.getElementById("message");

  cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
  });

  resetButton.addEventListener("click", resetGame);

  function handleCellClick(event){
    const cellIndex = parseInt(event.target.id.split("-")[1]);
    if (TicTacToe.makeMove(cellIndex)){
      updateBoard();
      const winner = TicTacToe.checkWinner();
      if (winner){
        messageElement.textContent = `${winner} wins!`;
        cells.forEach(cell => {
          cell.removeEventListener("click", handleCellClick);
        });
      }
    }

  }

  function resetGame(){
    TicTacToe.resetGame();
    updateBoard();
    messageElement.textContent = "";
    cells.forEach(cell => {
      cell.addEventListener("click", handleCellClick);
    });
    
  }

  function updateBoard(){
    const gameBoard = TicTacToe.getGameBoard();
    cells.forEach((cell, index) => {
      cell.textContent = gameBoard[index];
    })
  }
})