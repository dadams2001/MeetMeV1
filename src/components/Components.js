import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { useState } from "react";

import Home from '../pages/home/home.js';
import CreateEvent from "../pages/CreateEvent/CreateEvent.js";
import Profile from "../pages/Profile/Profile.js";
import Login from "../pages/Login/Login.js";
import Register from "../pages/Register/Register.js";
import MainModule from "./Main/Main.js";
import MainGood from "./Main/MainGood";
import MainHome from "./Main/MainHome";
import LoginForm from "../pages/LoginForm/LoginForm.js";
import ProtectedRouteBad from "../Common/AppTools/ProtectedRouteBad.js";
import ProtectedRouteGood from "../Common/AppTools/ProtectedRouteGood.js";

export default function Components() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="/CreateEvent" element={<CreateEvent/>}/>
          <Route path="/Profile" element={<Profile isLoggedIn={isLoggedIn}/>}/>
          <Route 
            path="/Login" 
            element={
            <ProtectedRouteGood isLoggedIn={isLoggedIn}>
              <Login/>
            </ProtectedRouteGood>
          }/>
          <Route 
            path="/Register" 
            element={
              <ProtectedRouteGood isLoggedIn={isLoggedIn}>
                <Register setIsLoggedIn={setIsLoggedIn}/>
              </ProtectedRouteGood>
          }/>
          <Route path="/main" element={<MainModule />} />
          <Route path="/home" element={<MainHome />} />
          <Route 
            path="/LoginForm" 
            element={
              <ProtectedRouteGood isLoggedIn={isLoggedIn} >
                <LoginForm setIsLoggedIn={setIsLoggedIn}/>
              </ProtectedRouteGood>
            }
          />
          <Route 
            path="/user/:firstName/:lastName" 
            element={
              <ProtectedRouteBad isLoggedIn={isLoggedIn}>
                <MainGood/>
              </ProtectedRouteBad>
            }
          />
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
