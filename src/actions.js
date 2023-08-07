export const setMoves = (nextMove) => ({
  type: "SET_MOVES",
  payload: nextMove,
});
export const setCurrentMove = (nextMove) => ({
  type: "SET_CURRENT_MOVE",
  payload: nextMove.length - 1,
});
export const RESTART = {
  type: "RESTART",
};
