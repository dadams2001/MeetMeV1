import './CreateEventForm.css';
import React from "react";

const CreateEventForm = ({event, onSubmit, onChange}) => { 
  return(
    <div className="CreateEventFormContainer">
      <form  onSubmit={onSubmit}  autoComplete="off">
        <div className="form-group">
          <label>Name of your event</label>
          <br/>
          <input
            type="text"
            value={event.EventName}
            onChange = {onChange}
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
          type="DateTime-Local"
          value={event.Date}
          onChange = {onChange}
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
          value={event.Address}
          onChange = {onChange}
          className="form-control"
          id="Address-input"
          name="Address"
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <br/>
        <input
          type="text"
        
          value={event.Description}
          onChange = {onChange}
          className="form-control"
          id="Description-input"
          name="Description"
          required
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
          Submit
        </button>
      </div>
    </form>
    </div>
  );
};
 
export default CreateEventForm;
