import './Register.css';

// Import Child Components
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

import { useEffect, useState } from "react";
import { createUser } from "../../Common/Services/AuthService";
import { useNavigate } from "react-router-dom";
import Parse from "parse";

const Register = ({setIsLoggedIn}) => {
  const navigate = useNavigate();

  // prevent invalid session token
  Parse.User.logOut();

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // Flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // UseEffect that runs when changes
  // are made to the state variables/flags
  useEffect(() => {
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("firstName")}, you successfully registered!`
          );
          setIsLoggedIn(true);
          navigate("/user/"+ userCreated.get("firstName") + "/" + userCreated.get("lastName"));
        }
        setAdd(false);
      });
    }
  }, [newUser, add, navigate, setIsLoggedIn]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewUser({
      ...newUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  return (
    <div>
      <Header/>
      <div id="RegisterFormContainer">
        <RegisterForm
          onChange={onChangeHandler}
          onSubmit={onSubmitHandler}
          user={newUser}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
