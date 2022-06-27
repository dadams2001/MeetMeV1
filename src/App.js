import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/home/home.js';

import './App.css';

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
