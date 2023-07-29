import styles from "./restart.module.css";
import { store } from "../store";
import { initialState } from "../reducer";

export function Restart({ setIsUpdate }) {
  const onRestartClick = () => {
    store.dispatch({ type: "RESTART" });
    setIsUpdate(true);
  };
  return (
    <div>
      <button className={styles.restart} onClick={onRestartClick}>
        Начать заново
      </button>
    </div>
  );
}
