import React from "react";
import styles from "components/GetSolution/NumberPad.module.css";

function NumberPad(props) {
  const { setNumber } = props;
  return (
    <div className={styles.numberPad}>
      <button onClick={() => setNumber(0)}>C</button>
      <button onClick={() => setNumber(1)}>1</button>
      <button onClick={() => setNumber(2)}>2</button>
      <button onClick={() => setNumber(3)}>3</button>
      <button onClick={() => setNumber(4)}>4</button>
      <button onClick={() => setNumber(5)}>5</button>
      <button onClick={() => setNumber(6)}>6</button>
      <button onClick={() => setNumber(7)}>7</button>
      <button onClick={() => setNumber(8)}>8</button>
      <button onClick={() => setNumber(9)}>9</button>
    </div>
  );
}

export default NumberPad;
