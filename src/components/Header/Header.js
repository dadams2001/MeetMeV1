import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <div className="header-container">
            <ul class="navigation">
                <li>
                    <div class="dropdown">
                        <button class="dropbtn">MENU</button>
                        <div class="dropdown-content">
                            <Link to="/CreateEvent">CREATE</Link>
                            <Link to="/">HOME</Link>
                        </div>
                    </div>
                </li>
                <li>
                    <h1><span class="meetme">MEET ME</span></h1>
                </li>
                <li>
                    <div class="dropdown">
                        <button class="dropbtn">PROFILE</button>
                        <div class="dropdown-content">
                            <Link to="/Profile">PROFILE</Link>
                            <Link to="/Login">LOGIN</Link>
                            <Link to="/Register">JOIN US</Link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}