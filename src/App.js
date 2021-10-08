import Board from "components/Board/Board";
import Menu from "components/Menu/Menu";
import SelectDifficulty from "components/SelectDifficulty/SelectDifficulty";
import React, { useState } from "react";
import styles from "App.module.css";
import classnames from "classnames";

function App() {
  const [page, setPage] = useState("home");
  const [difficulty, setDifficulty] = useState("easy");
  const [errorCount, setErrorCount] = useState(0);
  const [emptyCells, setEmptyCells] = useState(44);
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [display, toggleDisplay] = useState(false);
  const [originalGrid, setOriginalGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [grid, setGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [conflictingCells, setConflictingCells] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.fixedCard}>
        <div
          className={classnames(
            styles.slidingCard,
            page !== "home" ? styles.slideToTop : null
          )}
        >
          <div className={styles.menu}>
            <Menu
              page={page}
              setPage={setPage}
              originalGrid={originalGrid}
              setGrid={setGrid}
              grid={grid}
              conflictingCells={conflictingCells}
              setConflictingCells={setConflictingCells}
              emptyCells={emptyCells}
              setEmptyCells={setEmptyCells}
              errorCount={errorCount}
              setErrorCount={setErrorCount}
              difficulty={difficulty}
              setResult={setResult}
              setMessage={setMessage}
              toggleDisplay={toggleDisplay}
            />
          </div>
          <div className={styles.game}>
            {page === "selectDifficulty" ? (
              <SelectDifficulty
                setPage={setPage}
                setDifficulty={setDifficulty}
              />
            ) : (
              <Board
                page={page}
                originalGrid={originalGrid}
                setOriginalGrid={setOriginalGrid}
                grid={grid}
                setGrid={setGrid}
                difficulty={difficulty}
                errorCount={errorCount}
                setErrorCount={setErrorCount}
                conflictingCells={conflictingCells}
                setConflictingCells={setConflictingCells}
                emptyCells={emptyCells}
                setEmptyCells={setEmptyCells}
                result={result}
                message={message}
                setResult={setResult}
                setMessage={setMessage}
                display={display}
                toggleDisplay={toggleDisplay}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
