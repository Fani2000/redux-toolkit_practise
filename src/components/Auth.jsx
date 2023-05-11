import { useDispatch, useSelector } from "react-redux";
import classes from "./Auth.module.css";
import { useRef } from "react";
import { authActions } from "../store";

const Auth = () => {
  const isAuth = useSelector((state) => state.auth.isAuthinticated);
  const dispatch = useDispatch();
  // const username = useSelector((state) => state.auth.username);
  // const password = useSelector((state) => state.auth.password);

  const emailRef = useRef();
  const passwordRef = useRef();

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    dispatch(
      authActions.login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} type="password" id="password" />
          </div>
          <button type="submit" onClick={loginHandler}>
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
