import React from "react";
import styles from "components/Board/GameGrid.module.css";
import getConflictingCells from "engine/GetConflictingCells";
import classnames from "classnames";
import EndScreen from "components/others/EndScreen";

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
    result,
    setResult,
    message,
    setMessage,
    display,
    toggleDisplay,
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
    return numberOfErrors;
  }

  function changeCell(i, j) {
    if (selectedNumber !== grid[i][j] && originalGrid[i][j] === 0) {
      let eCells = emptyCells;
      if (selectedNumber === 0) {
        setEmptyCells(eCells + 1);
        eCells++;
      } else if (grid[i][j] === 0) {
        setEmptyCells(eCells - 1);
        eCells--;
      }
      let eCount = resolveErrors(i, j);
      let tempGrid = [];
      for (let k = 0; k < 9; k++) tempGrid.push([...grid[k]]);
      tempGrid[i][j] = selectedNumber;
      setGrid([...tempGrid]);
      if (eCells === 0 && eCount === 0) {
        setResult("Great!");
        setMessage("Congratulations. You have solved the puzzle successfully");
        toggleDisplay(true);
      }
    }
  }
  return (
    <div className={styles.container}>
      {grid.map((row, rowIndex) => (
        <div className={styles.row} key={rowIndex}>
          {row.map((col, colIndex) => (
            <div
              className={classnames(
                styles.cell,
                originalGrid[rowIndex][colIndex] !== 0
                  ? styles.prefilledCell
                  : styles.normalCell,
                conflictingCells[rowIndex][colIndex]
                  ? originalGrid[rowIndex][colIndex] !== 0
                    ? styles.conflictingPrefilledCell
                    : styles.conflictingCell
                  : null
              )}
              onClick={() => changeCell(rowIndex, colIndex)}
              key={colIndex}
            >
              {col === 0 ? " " : col}
            </div>
          ))}
        </div>
      ))}
      <EndScreen
        result={result}
        message={message}
        display={display}
        toggleDisplay={toggleDisplay}
      />
    </div>
  );
}

export default GameGrid;
