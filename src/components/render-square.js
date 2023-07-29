import styles from "./render-square.module.css";
import { store } from "../store";

export function Square({ value, onClick }) {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
}
