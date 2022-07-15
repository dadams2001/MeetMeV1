import './App.css';
import {render} from 'react-dom';
// Import Components
import Components from "./components/Components";

//given as setup

import Parse from "parse";
import * as Env from "./enviroments.js";
import React  from "react";

//PARSE baseline
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

export default function App() {
  return (
    <Components/>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}
