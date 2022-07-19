import './CreateEvent.css';

// Import Child Components
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';
import Address from "../../components/Address/Address";
import CreateEventForm from '../../components/CreateEventForm/CreateEventForm.js';


export default function CreateEvent() {
    return (
      <div className="CreateEvent">
        <Header/>
        <CreateEventForm />
        <Address />
        <Footer/>
      </div>
    );
}
