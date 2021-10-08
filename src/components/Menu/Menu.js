import React from "react";
import styles from "components/Menu/Menu.module.css";
import MenuOptions from "./MenuOptions";

function Menu(props) {
  const {
    page,
    setPage,
    originalGrid,
    setGrid,
    grid,
    setConflictingCells,
    setErrorCount,
    setEmptyCells,
    difficulty,
    errorCount,
    setResult,
    setMessage,
    toggleDisplay,
  } = props;
  return (
    <div className={styles.container}>
      <div className={styles.gameInfo}>
        <h1>Sudoku</h1>
        <br />
        Sudoku is played on a grid of 9 x 9 spaces. Within the rows and columns
        are 9 “squares” (made up of 3 x 3 spaces). Each row, column and square
        (9 spaces each) needs to be filled out with the numbers 1-9, without
        repeating any numbers within the row, column or square.
      </div>
      <MenuOptions
        page={page}
        setPage={setPage}
        originalGrid={originalGrid}
        setGrid={setGrid}
        grid={grid}
        setConflictingCells={setConflictingCells}
        difficulty={difficulty}
        setEmptyCells={setEmptyCells}
        setErrorCount={setErrorCount}
        errorCount={errorCount}
        setResult={setResult}
        setMessage={setMessage}
        toggleDisplay={toggleDisplay}
      />
    </div>
  );
}

export default Menu;
