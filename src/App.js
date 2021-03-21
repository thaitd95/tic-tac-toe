import "./App.css";
import "papercss/dist/paper.min.css";
import Game from "./app/containers/Game";
import Login from "./app/containers/Login";
import { connect } from "react-redux";
import { loginSuccess } from "./app/actions";

const App = (props) => {
  const { dispatch, login } = props;
  const token = localStorage.getItem("token");

  const handleLogin = (user) => {
    dispatch(loginSuccess(user));
    localStorage.setItem("token", `${user.userName}_${user.password}`);
  };

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {!token ? <Login onLogin={handleLogin} /> : <Game />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
