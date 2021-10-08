import React from "react";
import styles from "components/SelectDifficulty/SelectDifficulty.module.css";

function SelectDifficulty(props) {
  const { setPage, setDifficulty } = props;

  function changePage(difficulty) {
    setDifficulty(difficulty);
    setPage("play");
  }
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => changePage("easy")}>
        Easy
      </button>
      <button className={styles.button} onClick={() => changePage("medium")}>
        Medium
      </button>
      <button className={styles.button} onClick={() => changePage("hard")}>
        Hard
      </button>
    </div>
  );
}

export default SelectDifficulty;
