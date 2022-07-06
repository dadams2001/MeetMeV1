import React from "react";
import { Link, useParams } from "react-router-dom";

// Needs to be updated via updates in CodeSandbox
const MainGood = () => {
  const { firstName, lastName } = useParams();
  return (
    <div>
      <h1>
        You're all logged in {firstName} {lastName}!
      </h1>
      <button>
        <Link to="/main">Go back.</Link>
      </button>
    </div>
  );
};

export default MainGood;
