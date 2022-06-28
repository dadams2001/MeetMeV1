import './Profile.css';

// Import Child Components
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';

export default function Profile() {
    return (
      <div className="Profile">
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
            PROFILE
          </a>
          <Footer/>
      </div>
    );
}