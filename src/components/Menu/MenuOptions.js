import React from "react";
import styles from "components/Menu/MenuOptions.module.css";
import getAvailablePositions from "engine/GetAvailablePositions";
import solve from "engine/Solve";

function MenuOptions(props) {
  const {
    page,
    setPage,
    originalGrid,
    setGrid,
    grid,
    setConflictingCells,
    difficulty,
    setEmptyCells,
    setErrorCount,
  } = props;

  function resetGame() {
    let tempGrid = [];
    for (let i = 0; i < 9; i++) {
      tempGrid.push([...originalGrid[i]]);
    }
    setGrid(tempGrid);
    tempGrid = [];
    for (let i = 0; i < 9; i++) {
      let g1 = [];
      for (let j = 0; j < 9; j++) {
        g1.push(0);
      }
      tempGrid.push(g1);
    }
    setConflictingCells(tempGrid);
    setErrorCount(0);
    if (difficulty === "easy") setEmptyCells(37);
    else if (difficulty === "medium") setEmptyCells(47);
    else setEmptyCells(54);
  }

  function getSolution() {
    let positions = getAvailablePositions(grid);
    let tempGrid = [];
    for (let i = 0; i < 9; i++) {
      tempGrid.push([...grid[i]]);
    }
    solve(tempGrid, positions, 0);
    setGrid(tempGrid);
  }
  return (
    <div className={styles.container}>
      {page === "home" ? (
        <div>
          <button onClick={() => setPage("selectDifficulty")}>Play</button>
          <button onClick={() => setPage("findSolution")}>Find Solution</button>
        </div>
      ) : page === "selectDifficulty" ? (
        <div>
          <button onClick={() => setPage("home")}>Back</button>
        </div>
      ) : page === "play" ? (
        <div>
          <button onClick={() => setPage("home")}>Quit</button>
          <button onClick={() => resetGame()}>Reset</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setPage("home")}>Back</button>
          <button onClick={() => resetGame()}>Reset</button>
          <button onClick={() => getSolution()}>Find Solution</button>
        </div>
      )}
    </div>
  );
}

export default MenuOptions;
