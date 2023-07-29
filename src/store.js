import { appReducer, initialState } from "./reducer";

const createStore = (reducer) => {
  let state = initialState;

  return {
    dispatch: (action) => {
      state = reducer(state, action);
      //   console.log(state.isUpdate);
    },
    getState: () => state,
  };
};

export const store = createStore(appReducer);
