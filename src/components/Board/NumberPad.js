import React from "react";
import styles from "components/Board/NumberPad.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

function NumberPad(props) {
  const { selectedNumber, setSelectedNumber } = props;
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={styles.container}>
      {numbers.map((n, index) => (
        <button
          key={index}
          className={selectedNumber === n ? styles.selected : styles.unSelected}
          onClick={() => setSelectedNumber(n)}
        >
          {n === 0 ? <FontAwesomeIcon icon={faEraser} /> : n}
        </button>
      ))}
    </div>
  );
}

export default NumberPad;
