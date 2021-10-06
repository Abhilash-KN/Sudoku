import React from "react";
import styles from "components/Board/GameGrid.module.css";
import getConflictingCells from "engine/GetConflictingCells";

function GameGrid(props) {
  const {
    originalGrid,
    grid,
    setGrid,
    selectedNumber,
    errorCount,
    setErrorCount,
    conflictingCells,
    setConflictingCells,
    emptyCells,
    setEmptyCells,
  } = props;

  function resolveErrors(i, j) {
    let numberOfErrors = errorCount;
    let incorrectCells = [];
    conflictingCells.map((c) => incorrectCells.push([...c]));
    let currentNumber = grid[i][j];
    let cells = getConflictingCells(grid, i, j, currentNumber);
    cells.map((c) => {
      incorrectCells[i][j]--;
      incorrectCells[c[0]][c[1]]--;
      numberOfErrors--;
      return null;
    });
    setConflictingCells(incorrectCells);
    cells = getConflictingCells(grid, i, j, selectedNumber);
    cells.map((c) => {
      incorrectCells[i][j]++;
      incorrectCells[c[0]][c[1]]++;
      numberOfErrors++;
      return null;
    });
    setConflictingCells(incorrectCells);
    setErrorCount(numberOfErrors);
  }

  function changeCell(i, j) {
    if (selectedNumber !== grid[i][j] && originalGrid[i][j] === 0) {
      let eCells = emptyCells;
      if (selectedNumber === 0) {
        setEmptyCells(eCells + 1);
      } else if (grid[i][j] === 0) {
        setEmptyCells(eCells - 1);
      }
      resolveErrors(i, j);
      let tempGrid = [];
      for (let k = 0; k < 9; k++) tempGrid.push([...grid[k]]);
      tempGrid[i][j] = selectedNumber;
      setGrid([...tempGrid]);
    }
  }
  return (
    <div className={styles.container}>
      {grid.map((row, rowIndex) => (
        <div className={styles.row} key={rowIndex}>
          {row.map((col, colIndex) => (
            <div
              className={styles.cell}
              onClick={() => changeCell(rowIndex, colIndex)}
              key={colIndex}
              style={{
                background: conflictingCells[rowIndex][colIndex]
                  ? "red"
                  : "none",
              }}
            >
              {col === 0 ? " " : col}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameGrid;
