import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Playground, Restart } from "./components";
import { store } from "./store";

export default function App() {
  const [isUpdate, setIsUpdate] = useState(false);
  const { moves, currentMove } = store.getState();

  useEffect(() => {
    return () => {
      store.getState();
    };
  }, [isUpdate]);

  const currentSquares = moves[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextMove = [...moves.slice(0, currentMove + 1), nextSquares];
    store.dispatch({ type: "SET_MOVES", payload: nextMove });
    store.dispatch({ type: "SET_CURRENT_MOVE", payload: nextMove.length - 1 });
    setIsUpdate(!isUpdate);
  }

  return (
    <div className={styles.playground}>
      <Playground
        xIsNext={xIsNext}
        squares={currentSquares}
        onPlay={handlePlay}
      />
      <Restart setIsUpdate={setIsUpdate} />
    </div>
  );
}
