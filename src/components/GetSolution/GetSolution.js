import React, { useState } from "react";
import styles from "components/GetSolution/GetSolution.module.css";
import NumberPad from "./NumberPad";
import getAvailablePositions from "engine/GetAvailablePositions";
import solve from "engine/Solve";

function GetSolution(props) {
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
  const [selectedNumber, setNumber] = useState(0);

  function changeCell(i, j) {
    let g = [...grid];
    g[i][j] = selectedNumber;
    setGrid([...g]);
  }

  function clearAll() {
    let g = [...grid];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        g[i][j] = 0;
      }
    }
    setGrid([...g]);
  }

  function findSolution() {
    let tempGrid = [...grid];
    let positions = getAvailablePositions(tempGrid);
    let solution = solve(tempGrid, positions, 0);
    if (solution) {
      setGrid([...tempGrid]);
    } else {
      alert("There are logical errors in the given sudoku");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {grid.map((row, rowIndex) => (
          <div className={styles.row} key={rowIndex}>
            {row.map((cell, colIndex) => (
              <div
                onClick={() => changeCell(rowIndex, colIndex)}
                className={styles.cell}
                key={colIndex}
              >
                {cell > 0 ? cell : " "}
              </div>
            ))}
          </div>
        ))}
      </div>
      <NumberPad setNumber={setNumber} />
      <button onClick={() => clearAll()}>Clear all</button>
      <button onClick={() => findSolution()}>Get Solution</button>
    </div>
  );
}

export default GetSolution;
