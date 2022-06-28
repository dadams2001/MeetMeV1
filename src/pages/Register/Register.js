import './Register.css';

// Import Child Components
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';

export default function Register() {
    return (
      <div className="Register">
        <Header/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
              REGISTER
          </a>
          <Footer/>
      </div>
    );
}