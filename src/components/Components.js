import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from '../pages/home/home.js';
import CreateEvent from "../pages/CreateEvent/CreateEvent.js";
import Profile from "../pages/Profile/Profile.js";
import Login from "../pages/Login/Login.js";
import Register from "../pages/Register/Register.js";

export default function Components() {
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
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h1>404 Not Found</h1>
              <p>Looks like someone made an oopise-whoopise!</p>
              <p>Let's get you back to <Link to="/">home.</Link></p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}
