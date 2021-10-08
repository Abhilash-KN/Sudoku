import React from "react";
import styles from "components/Menu/MenuOptions.module.css";
import getAvailablePositions from "engine/GetAvailablePositions";
import solve from "engine/Solve";
import classnames from "classnames";

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
    errorCount,
    setResult,
    setMessage,
    toggleDisplay,
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
    if (errorCount === 0) {
      let positions = getAvailablePositions(grid);
      let tempGrid = [];
      for (let i = 0; i < 9; i++) {
        tempGrid.push([...grid[i]]);
      }
      let status = solve(tempGrid, positions, 0);
      if (status) setGrid(tempGrid);
      else {
        setResult("Error!");
        setMessage(
          "The given puzzle cannot be solved. Please check the squares which are containing logical errors and retry"
        );
        toggleDisplay(true);
      }
    } else {
      setResult("Error!");
      setMessage(
        "There are errors in the given puzzle. Kindly check the highlighted cells and retry"
      );
      toggleDisplay(true);
    }
  }
  return (
    <div
      className={classnames(
        styles.container,
        page === "home" ? styles.mobileHome : null
      )}
    >
      {page === "home" ? (
        <div className={classnames(styles.buttonGroup)}>
          <button
            className={styles.button}
            onClick={() => setPage("selectDifficulty")}
          >
            Play
          </button>
          <button
            className={styles.button}
            onClick={() => setPage("findSolution")}
          >
            Find Solution
          </button>
        </div>
      ) : page === "selectDifficulty" ? (
        <div className={styles.buttonGroup}>
          <button className={styles.button} onClick={() => setPage("home")}>
            Back
          </button>
        </div>
      ) : page === "play" ? (
        <div className={styles.buttonGroup}>
          <button className={styles.button} onClick={() => setPage("home")}>
            Quit
          </button>
          <button className={styles.button} onClick={() => resetGame()}>
            Reset
          </button>
        </div>
      ) : (
        <div className={styles.buttonGroup}>
          <button className={styles.button} onClick={() => setPage("home")}>
            Back
          </button>
          <button className={styles.button} onClick={() => resetGame()}>
            Reset
          </button>
          <button className={styles.button} onClick={() => getSolution()}>
            Solve
          </button>
        </div>
      )}
    </div>
  );
}

export default MenuOptions;
