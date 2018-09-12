let squares = document.querySelectorAll(".column");

squares.forEach(function(square) {
  square.addEventListener("click", squareClicked);
});

let currentPlay = "O";

function squareClicked(e) {
    if (e.target.textContent !== "") {
        return;
    } if (currentPlay === "X") {
    currentPlay = "O";
    e.target.textContent = currentPlay;
  } else {
    currentPlay = "X";
    e.target.textContent = currentPlay;
  } 
}



const winningCombinations = [
  ["c1", "c2", "c3"],
  ["c1", "c4", "c7"],
  ["c1", "c5", "c9"],
  ["c2", "c5", "c8"],
  ["c3", "c6", "c9"],
  ["c4", "c5", "c6"],
  ["c7", "c8", "c9"],
  ["c3", "c5", "c7"]
];

winningCombinations.forEach(function(id) 




//push onto array
//function for game is over
//


