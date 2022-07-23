import './Header.css';
import { Link } from 'react-router-dom';
import Parse from 'parse';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const onLogoutHandler = () => {
        Parse.User.logOut().then(() => {
            navigate("/")
        });
    }
    return(
        <div className="header-container">
            <ul class="navigation">
                <li>
                    <div class="dropdown">
                        <button class="dropbtn" id="menu">MENU</button>
                        <div class="dropdown-content">
                            <Link className="link" to="/CreateEvent">
                                <h3>CREATE</h3>
                            </Link>
                            <Link className="link" to="/">
                               <h3>HOME</h3>
                            </Link>
                        </div>
                    </div>
                </li>
                <li>
                    <h1><span class="meetme">MeetMe</span></h1>
                </li>
                <li>
                    <div class="dropdown">
                        <button class="dropbtn" id='profile'>PROFILE</button>
                        <div class="dropdown-content">
                            <Link className="link" to="/Profile">
                                <h3>PROFILE</h3>
                            </Link>
                            {(Parse.User.current()) ?
                                <div id="logout" onClick={onLogoutHandler}>
                                    <h3>LOGOUT</h3>
                                </div> 
                                :
                                <Link className="link" to="/Login">
                                    <h3>LOGIN</h3>
                                </Link>
                            }
                            
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );   
}