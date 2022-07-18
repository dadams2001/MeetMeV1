import './CreateEvent.css';

// Import Child Components
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';
import Address from "../../components/Address/Address";


export default function CreateEvent() {
  
    return (
      <div className="CreateEvent">
        <Header/>
        <createEventForm />
        <Address />
          <Footer/>
      </div>
    );
}
