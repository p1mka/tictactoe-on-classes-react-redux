import styles from "./App.module.css";
import { Playground, Restart } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { selectMoves, selectCurrentMove } from "./selectors";
import { setMoves, setCurrentMove } from "./actions";

export default function App() {
  const moves = useSelector(selectMoves);
  const currentMove = useSelector(selectCurrentMove);
  const dispatch = useDispatch();

  const currentSquares = moves[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextMove = [...moves.slice(0, currentMove + 1), nextSquares];
    dispatch(setMoves(nextMove));
    dispatch(setCurrentMove(nextMove));
  }

  return (
    <div className={styles.playground}>
      <Playground
        xIsNext={xIsNext}
        squares={currentSquares}
        onPlay={handlePlay}
      />
      <Restart />
    </div>
  );
}
