import { configureStore, createSlice } from "@reduxjs/toolkit";
import { legacy_createStore } from "redux";
import { counterSlice } from "../slices/counteSlice";
import { authSlice } from "../slices/AuthSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// const store = legacy_createStore(conterReducer);

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
// store.dispatch({ type: "increment" });
// store.dispatch({ type: "increment" });
// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
// store.dispatch({ type: "increment" });
// store.dispatch({ type: "" });
