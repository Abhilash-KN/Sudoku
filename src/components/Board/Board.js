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
      setOriginalGrid(tempGrid);
      setGrid(tempGrid);
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
      />
      <NumberPad
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      />
      {emptyCells === 0 && errorCount === 0 ? "Puzzle solved" : null}
    </div>
  );
}

export default Board;
