import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';

// Import Components
import Components from "./components/Components";

//given as setup
// import "./styles.css";
import Parse from "parse";
import * as Env from "./enviroments.js";

//PARSE baseline
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return (
    <Components/>
  );
}

export default App;
