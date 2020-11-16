import { AuthTypes } from "../types/AuthTypes";

export const AuthReducer = (state = {}, action) => {
 switch (action.type) {
  case AuthTypes.LOGIN:
   return {
    ...action.payload,
    logged: true,
   };

  case AuthTypes.LOGOUT:
   return {
    logged: false,
   };

  default:
   return state;
 }
};
