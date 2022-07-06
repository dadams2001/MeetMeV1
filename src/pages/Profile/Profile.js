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
         
          <Footer/>
      </div>
    );
}