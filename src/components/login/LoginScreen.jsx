import React from "react";

export const LoginScreen = ({ history }) => {
 const handlerLogin = () => {
  history.replace("/");
 };
 return (
  <div className="container mt-5">
   <h2>Login Screen</h2>
   <button className="btn btn-primary" onClick={handlerLogin}>
    Login
   </button>
  </div>
 );
};
