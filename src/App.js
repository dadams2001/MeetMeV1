import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/home/home.js';

import './App.css';

//given as setup
import "./styles.css";
import Parse from "parse";
import * as Env from "./environments.js";
//useEffect and useState
import { useEffect, useState } from "react";
//get atendees from function getAllAttendees
import { getAllAttendees } from "/src/Common/Services/GetAttendees.js";
//child component
import { Header } from "/src/Components/Header.js";
import { Components } from "./Components/Components.js";
//PARSE baseline
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    getAllAttendees().then((response) => {
      setAttendees(response);
    });
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Header attendees={attendees} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
