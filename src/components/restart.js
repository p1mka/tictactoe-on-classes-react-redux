import styles from "./restart.module.css";
import { useDispatch } from "react-redux";
import { RESTART } from "../actions";

export function Restart() {
  const dispatch = useDispatch();
  const onRestartClick = () => {
    dispatch(RESTART);
  };
  return (
    <div>
      <button className={styles.restart} onClick={onRestartClick}>
        Начать заново
      </button>
    </div>
  );
}
