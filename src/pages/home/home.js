import './home.css';

// Import Child Components
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';

export default function Home() {
    return (
      <div className="Home">
        <Header/>
        <div>
          <h1>Welcome to MeetMe</h1>
          <p>First, begin by creating and event</p>
          <p>Then, invite your friends through your profile!</p>
        </div>
        <Footer/>
      </div>
    );
}