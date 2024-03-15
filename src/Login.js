import React, { useContext, useState } from "react";
import "./css/login.css";
import facebookLogo from "./assets/facebook.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { StateContext, StateProvider } from "./StateProvider";

const Login = () => {
  const [{ user }, dispatch] = useContext(StateContext);
  const provider = new GoogleAuthProvider();

  const FacebookLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // console.log("hello", user);
        dispatch({
          type: "SET_USER",
          user: {
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
          },
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src={facebookLogo}
          alt="facebooklogo"
          style={{ width: 60, height: 60 }}
        />
        <h2>Sign in with Google</h2>
        <button onClick={FacebookLogin}>Login with Gamil</button>
      </div>
    </div>
  );
};

export default Login;
