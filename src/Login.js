/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import "./Login.css";
import { Button } from "@material-ui/core";

import { auth, provider } from "./firebase"

import { actionTypes } from "./reducer"
import { useStateValue } from "./StateProvider"

function Login() {

    const [state, dispatch] = useStateValue();

    const SingIn = () => {

        //  Sing In
        auth
        .signInWithPopup(provider)
        .then((result) => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user)
        })
        .catch((error) => alert(error.message));
    };

  return (
    <div className="login">
      <div className="login__logo">
        <img 
        src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w="
        />

        <img
         src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
         />
      </div>
      <Button type="submit" onClick={SingIn}>
          Sing In
      </Button>
    </div>
  );
}

export default Login;
