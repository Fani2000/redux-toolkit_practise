import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store";
import { getCounter } from "../actions";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter());
  };

  const IncreaseHandler = () => {
    // dispatch({ type: "increase", amount: 5 });
    dispatch(counterActions.increase({ amount: 5 }));
  };

  const IncremenetHandler = () => {
    dispatch(counterActions.increment());
  };

  const DecremenentHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div className={classes.buttons}>
        <button onClick={IncremenetHandler}>Incremenet</button>
        <button onClick={IncreaseHandler}>Increase by 5</button>
        <button onClick={DecremenentHandler}>Decrement</button>
      </div>
    </main>
  );
};

export default Counter;
