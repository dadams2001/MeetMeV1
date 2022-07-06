import './Login.css';

import { Link } from "react-router-dom";

// Import Child Components
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';
import MainModule from "../../components/Main/Main.js";



export default function Login() {
 
    return (
      <div className="Login">
        <Header/>
        <h1>Login</h1>
        <p>Would you like to 
         </p>
        <Link to="/register">
        <button>Register</button>
      </Link>
      <br />
      <p>or</p>
      <br />
      <Link to="/login">
        <button>Login</button>
      </Link>
          <Footer/>
      </div>
    );
}