import './LoginForm.css';

// Import Child Components
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';
import LoginFormComp from '../../components/LoginFormComp/LoginFormComp';

import { useState } from "react";
import { loginUser } from "../../Common/Services/AuthService";
import { useNavigate } from "react-router-dom";

import Parse from "parse";

const LoginForm = () => {
  const navigate = useNavigate();
  const [userName, getUserName] = useState("");
  const [password, getPassword] = useState("");

  const onChangeHandlerUsername = (e) => {
    e.preventDefault();
    getUserName(e.target.value);
  };

  const onChangeHandlerPassword = (e) => {
    e.preventDefault();
    getPassword(e.target.value);
  };

  const buttonHandler = (e) => {
    e.preventDefault();
    loginUser(userName, password).then((user) => {
      // console.log(Parse.User.current());
      if (user) {
        navigate (
          "/user/" + user.get("firstName") + "/" + user.get("lastName")
        );
      }
    });
  };

  return (
    <div>
      <Header/>
      <div id="LoginFormContainer">
        <LoginFormComp
          onChangeUserName={onChangeHandlerUsername}
          onChangePassword={onChangeHandlerPassword}
          onSubmit={buttonHandler}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default LoginForm;
