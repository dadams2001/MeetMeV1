import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/home/home.js';

import './App.css';

//given as setup
// import "./styles.css";
import Parse from "parse";
import * as Env from "./enviroments.js";


//child component

// import { Components } from "./components/Components.js";
//PARSE baseline
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
