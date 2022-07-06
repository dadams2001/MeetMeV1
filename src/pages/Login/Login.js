import './Login.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


// Import Child Components
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';
import MainModule from "../../components/Main/Main.js";
import MainGood from "../../components/Main/MainGood";
import MainHome from "../../components/Main/MainHome";



export default function Login() {
 
    return (
      <div className="Login">
        <Header/>
        <MainModule />
        <MainGood />
        
          <Footer/>
      </div>
    );
}