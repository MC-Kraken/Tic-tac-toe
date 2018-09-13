let squares = document.querySelectorAll(".column");

squares.forEach(function (square) {
  square.addEventListener("click", squareClicked);
});

let currentPlay = "X";

//Click function
function squareClicked(e) {

  if (e.target.innerHTML !== "") {
    return;
  };

  e.target.classList.add(currentPlay);
  e.target.innerHTML = `<span class="X-or-O">${currentPlay}</span>`


  if (isThereWin()) {
    console.log("You Won!")
    alert(currentPlay + " Won!");
    document.getElementById("button").className = 'show'; 
    currentPlay = ""
    return
  };


  if (currentPlay === "X") {
    currentPlay = "O";

  } else {
    currentPlay = "X";
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


function isThereWin() {
  let results = [];

  //Loop function counting winning moves
  winningCombinations.forEach(function (winningPattern) {

    let numWinningMoves = 0;

    winningPattern.forEach(function (id) {
      let found = document.querySelector(`#${id}.${currentPlay}`);

      if (found !== null) {
        numWinningMoves++;
        console.log(numWinningMoves)
      }
    });

      results.push(numWinningMoves);
  });

  if (results.includes(3)) {
    return true;
  }
  return false
}