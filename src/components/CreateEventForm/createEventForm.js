import './CreateEventForm.css';

const CreateEventForm = () => { 
  return(
    <div className="CreateEventFormContainer">
      <form autoComplete="off">
        <div className="form-group">
          <label>Name of your event</label>
          <br/>
          <input
            type="text"
            className="form-control"
            id="event-name-input"
            name="EventName"
            required
          />
        </div>
      <div className="form-group">
        <label>What Day Will it be?</label>
        <br/>
        <input
          type="Date"
          className="form-control"
          id="date-input"
          name="Date"
          required
        />
      </div>
      <div className="form-group">
        <label>Where?</label>
        <br/>
        <input
          type="text"
          className="form-control"
          id="address-input"
          name="address"
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <br/>
        <input
          type="text"
          className="form-control"
          id="description-input"
          name="description"
          required
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
    </div>
  );
};
 
export default CreateEventForm;
