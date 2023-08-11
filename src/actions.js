export const setSquares = (nextMove) => ({
  type: "SET_SQUARES",
  payload: nextMove,
});
export const setCurrentMove = (nextMove) => ({
  type: "SET_CURRENT_MOVE",
  payload: nextMove.length - 1,
});
export const RESTART = {
  type: "RESTART",
};
export const setXIsNext = (xIsNext) => ({
  type: "SET_X_IS_NEXT",
  payload: !xIsNext,
});
