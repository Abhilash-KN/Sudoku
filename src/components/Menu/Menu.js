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
  } = props;
  return (
    <div className={styles.container}>
      <div>About sudoku</div>
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
      />
    </div>
  );
}

export default Menu;
