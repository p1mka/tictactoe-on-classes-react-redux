export const initialState = {
  moves: [Array(9).fill(null)],
  currentMove: 0,
  isUpdate: false,
};

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_MOVES": {
      return { ...state, moves: payload };
    }
    case "SET_CURRENT_MOVE": {
      return { ...state, currentMove: payload };
    }
    case "RESTART": {
      return initialState;
    }
    case "SET_IS_UPDATE": {
      return { ...state, isUpdate: payload };
    }
    default:
      return state;
  }
};
