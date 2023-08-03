import styles from "./restart.module.css";
import { store } from "../store";

export function Restart({ setIsUpdate, isUpdate }) {
  const onRestartClick = () => {
    store.dispatch({ type: "RESTART" });
    setIsUpdate(!isUpdate);
  };
  return (
    <div>
      <button className={styles.restart} onClick={onRestartClick}>
        Начать заново
      </button>
    </div>
  );
}
