import React from "react";
//use history to remember details of router
import { useNavigate  } from "react-router-dom";
// Needs to be updated via updates in CodeSandbox
const MainModule = () => {
    const navigate = useNavigate();

    const buttonHandler = () => {
      navigate.push("/home");
    };

  return (
    <div>
      <input type="checkbox" id="flagBox" />
      <button onClick={buttonHandler}>HOME</button>
    </div>
  );
};

export default MainModule;
