import React from "react";
import { useHistory } from "react-router-dom";
 
const createEventForm = ({event, onChange, onSubmit}) =>{
    
  return(
  <div>
    <form onSubmit={onSubmit} autoComplete="off">
<div className="form-group">
    <label>Name of your event</label>
    <br/>
    <input
    type="text"
    className="form-control"
    id="event-name-input"
    onChange={onChange}
    value={event.EventName}
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
    onChange={onChange}
    value={event.Date}
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
    onChange={onChange}
    value={event.Address}
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
    onChange={onChange}
    value={event.Description}
    name="description"
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
 
export default createEventForm;
