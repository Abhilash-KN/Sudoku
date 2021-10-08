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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
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
