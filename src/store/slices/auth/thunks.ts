import { authActions } from './auth-slice';
import Axios from 'axios';
import Cookies from 'js-cookie';

export interface LoginCredentials {
  email: string;
  password: string;
}

export const login = (credentials: LoginCredentials) => async (dispatch: any) => {
  try {
    dispatch(authActions.loginStart());

    const options = {
      url: "/auth/login",
      method: "POST",
      data:  {
        email: credentials.email,
        password: credentials.password
      }
    };

    // Commented actual API call
    const response = await Axios(options);
    
    let rspData  = response.data;

    if (response.status === 200) {
      Cookies.set("name", rspData["name"], { path: "/", expires: new Date(Date.now() + 31536000) });
      Cookies.set("role", rspData["role"], { path: "/", expires: new Date(Date.now() + 31536000) });
      Cookies.set("id", rspData["id"], { path: "/", expires: new Date(Date.now() + 31536000) });
      Cookies.set("locationId", rspData["locationId"], { path: "/", expires: new Date(Date.now() + 31536000) });

      dispatch(authActions.loginSuccess(rspData));
      return rspData;
    }
    else {
      dispatch(authActions.loginFailure(rspData['error']['code']));
    }
  } catch (error: any) {
    dispatch(authActions.loginFailure(error.message));
    throw error;
  }
};

export const logout = () => async (dispatch: any) => {

  try {
    const options = {
      url: "/auth/logout",
      method: "POST"
    };

    // Commented actual API call
    const response = await Axios(options);
    let rspData = response.data

    if (response.status === 200) {
       // Remove cookies
      Cookies.remove('token');
      Cookies.remove('user');
      Cookies.remove('role');
      Cookies.remove('name');
      Cookies.remove('locationId');

      // Dispatch logout action
      dispatch(authActions.logout());
    }
    else {
      dispatch(authActions.loginFailure(rspData['error']['code']));
    }
  }catch(error: any) {
    dispatch(authActions.loginFailure(error.message));
    throw error;
  }
 
};