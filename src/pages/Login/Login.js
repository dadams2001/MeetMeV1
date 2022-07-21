import './Login.css';

import { Link } from "react-router-dom";

// Import Child Components
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';



export default function Login() {
     return (
      <div className="Login">
        <Header/>
        <h1>Login</h1>
        <p>Would you like to 
         </p>
        <Link to="/Register">
        <button>Register</button>
      </Link>
      <p>or</p>
      <Link to="/LoginForm">
        <button>Login</button>
      </Link>
      <Footer/>
      </div>
    );
}