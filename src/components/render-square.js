import styles from "./render-square.module.css";

export function Square({ value, onClick }) {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
}
