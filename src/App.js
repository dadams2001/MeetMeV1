import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/home/home.js';
import CreateEvent from "./pages/CreateEvent/CreateEvent.js";
import Profile from "./pages/Profile/Profile.js";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";

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
          <Route path="/CreateEvent" element={<CreateEvent/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
