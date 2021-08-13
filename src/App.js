import logo from "./logo.svg";
import "./App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./actions";
import Headers from "./components/Headers";
import Loading from "./components/Loading";
import ErrorMessage from "./components/errorMessage";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Names from "./components/Names";
import Count from "./components/Count";
function App(props) {
  const { loginState, messageState, authState, actions } = props;
  console.log(props);
  return (
    <div className="App">
      <Headers />
      <Login auth={authState.auth} actions={actions} />
      <Loading loading={loginState.loading} />
      <Logout auth={authState.auth} actions={actions} />
      <ErrorMessage errorMessage={messageState.errorMessage} />
      <Names />
      <Count />
      <p className="App-intro">
        To get started, edit <code>src/Appjs</code> and save to reload
      </p>
    </div>
  );
}

export default connect(
  (state) => state,
  (dispatch) => ({ actions: bindActionCreators(actions, dispatch) })
)(App);
