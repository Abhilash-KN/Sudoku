import React, { useState, useEffect } from "react";
import GameGrid from "./GameGrid";
import NumberPad from "./NumberPad";

import styles from "components/Board/Board.module.css";
import generatePuzzle from "engine/GeneratePuzzle";

function Board(props) {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const {
    originalGrid,
    setOriginalGrid,
    grid,
    setGrid,
    difficulty,
    page,
    errorCount,
    emptyCells,
    setEmptyCells,
    setErrorCount,
    conflictingCells,
    setConflictingCells,
    result,
    setResult,
    message,
    setMessage,
    display,
    toggleDisplay,
  } = props;

  useEffect(() => {
    if (page === "play") {
      if (difficulty === "easy") setEmptyCells(37);
      else if (difficulty === "medium") setEmptyCells(47);
      else setEmptyCells(54);
      let tempGrid = generatePuzzle(difficulty);
      setOriginalGrid(tempGrid);
      setGrid(tempGrid);
    } else {
      let tempGrid = [];
      for (let i = 0; i < 9; i++) {
        let g1 = [];
        for (let j = 0; j < 9; j++) {
          g1.push(0);
        }
        tempGrid.push([...g1]);
      }
      let tempConflictingGrid = [];
      for (let i = 0; i < 9; i++) {
        let g1 = [];
        for (let j = 0; j < 9; j++) {
          g1.push(0);
        }
        tempConflictingGrid.push([...g1]);
      }
      setErrorCount(0);
      setEmptyCells(81);
      setOriginalGrid(tempGrid);
      setGrid(tempGrid);
      setConflictingCells(tempConflictingGrid);
    }
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className={styles.container}>
      <GameGrid
        originalGrid={originalGrid}
        setOriginalGrid={setOriginalGrid}
        grid={grid}
        setGrid={setGrid}
        selectedNumber={selectedNumber}
        errorCount={errorCount}
        setErrorCount={setErrorCount}
        conflictingCells={conflictingCells}
        setConflictingCells={setConflictingCells}
        emptyCells={emptyCells}
        setEmptyCells={setEmptyCells}
        result={result}
        setResult={setResult}
        message={message}
        setMessage={setMessage}
        display={display}
        toggleDisplay={toggleDisplay}
      />
      <NumberPad
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      />
    </div>
  );
}

export default Board;
