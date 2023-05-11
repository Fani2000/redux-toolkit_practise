import { createSlice } from "@reduxjs/toolkit";

// const conterReducer = (state = { counter: 1 }, action) => {
//   switch (action.type) {
//     case "increment":
//       return { counter: state.counter + 1 };
//     case "decrement":
//       return { counter: state.counter - 1 };
//     case "increase":
//       return { counter: state.counter + action.amount };
//     default:
//       return { counter: state.counter };
//   }
// };

const initialState = {
  counter: 0,
  showCounter: true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter += action.payload.amount;
    },
    decrement(state) {
      state.counter--;
    },
    toogleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
