import React from "react";

/* STATELESS CHILD COMPONENT */
const Address = ({ onChange, onClick }) => {
  return (
    <div>
      <hr />
     <h3>Address</h3>
     <p>Enter Party Location below</p>
      <form>
        <input text="test" onChange={onChange} />
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Address;
