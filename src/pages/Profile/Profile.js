import './Profile.css';

import { Link } from "react-router-dom";
// Import Child Components
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';

export default function Profile() {
    return (
      <div className="Profile">
        <Header/>
          <p>PROFILE</p>
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