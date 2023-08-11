export const initialState = {
  squares: [Array(9).fill(null)],
  xIsNext: true,
};

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_SQUARES": {
      return { ...state, squares: payload };
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
    case "SET_X_IS_NEXT": {
      return { ...state, xIsNext: payload };
    }
    default:
      return state;
  }
};
