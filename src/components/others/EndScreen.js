import React from "react";
import styles from "components/others/EndScreen.module.css";

function EndScreen(props) {
  const { result, message, display, toggleDisplay } = props;
  return (
    <div
      className={styles.container}
      style={{ display: display ? "flex" : "none" }}
    >
      <h1 className={styles.result}>{result}</h1>
      <div className={styles.message}>{message}</div>
      <button className={styles.button} onClick={() => toggleDisplay(false)}>
        Ok
      </button>
    </div>
  );
}

export default EndScreen;
