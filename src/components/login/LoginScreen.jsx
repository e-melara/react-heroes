import React, { useContext } from "react";
import { UserContext } from "../../auth/AuthContext";
import { AuthTypes } from "../../types/AuthTypes";

export const LoginScreen = ({ history }) => {
 const { dispatch } = useContext(UserContext);

 const handlerLogin = () => {
  dispatch({
   type: AuthTypes.LOGIN,
   payload: { name: "Edwin Melara" },
  });
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
