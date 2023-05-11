import { Provider, useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import store from "./store";
import { Fragment } from "react";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthinticated);
  return (
    <Fragment>
      <Header />
      {!isAuth ? <Auth /> : <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
