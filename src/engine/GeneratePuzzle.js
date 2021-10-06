import getAvailablePositions from "./GetAvailablePositions";
import solve from "./Solve";

function removeCells(grid, difficulty, cellsToRemove) {
  difficulty.map((n1, idx) => {
    cellsToRemove[idx].slice(0, n1).map((n2) => {
      grid[idx][n2] = 0;
      return null;
    });
    return null;
  });
}

export default function generatePuzzle(difficulty) {
  var emptyGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  var cellsToRemove = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() - 0.5),
    [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() - 0.5),
    [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() - 0.5),
    [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() - 0.5),
    [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() - 0.5),
    [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() - 0.5),
    [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() - 0.5),
    [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() - 0.5),
    [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() - 0.5),
  ];
  var easy = [6, 5, 4, 4, 4, 4, 4, 3, 3].sort(() => Math.random() - 0.5);
  var medium = [7, 7, 6, 6, 5, 5, 4, 4, 3].sort(() => Math.random() - 0.5);
  var hard = [8, 8, 7, 6, 6, 6, 5, 4, 4].sort(() => Math.random() - 0.5);

  let availablePositions = getAvailablePositions(emptyGrid);
  solve(emptyGrid, availablePositions, 0);

  removeCells(
    emptyGrid,
    difficulty === "easy" ? easy : difficulty === "medium" ? medium : hard,
    cellsToRemove
  );

  return emptyGrid;
}
