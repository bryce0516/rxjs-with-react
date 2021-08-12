import logo from "./logo.svg";
import "./App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./actions";
import Headers from "./components/Headers";
function App() {
  return (
    <div className="App">
      <Headers />
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
