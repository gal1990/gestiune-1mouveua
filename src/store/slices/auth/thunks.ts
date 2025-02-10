import { createAsyncThunk } from '@reduxjs/toolkit';
import { authActions } from './auth-slice';
import axios from 'axios';
import Cookies from 'js-cookie';

interface LoginCredentials {
  email: string;
  password: string;
}

export const login = (credentials: LoginCredentials) => async (dispatch: any) => {
  try {
    dispatch(authActions.loginStart());

    // Commented actual API call
    /*
    const response = await axios.post('/api/auth/login', credentials);
    const data = response.data;
    */

    // Dummy response data based on email
    let dummyData;
    if (credentials.email === 'admin@mail.ro') {
      dummyData = {
        id: 394,
        name: "Admin User",
        role: "ADMIN",
        isDeleted: false,
        isAvailable: true
      };
    } else if (credentials.email === 'employee@mail.ro') {
      dummyData = {
        id: 395,
        name: "Employee User",
        role: "EMPLOYEE",
        isDeleted: false,
        isAvailable: true
      };
    } else {
      throw new Error('Invalid credentials');
    }

    // Set cookies with dummy data
    Cookies.set('token', 'dummy-jwt-token');
    Cookies.set('user', JSON.stringify(dummyData));
    Cookies.set('role', dummyData.role);

    dispatch(authActions.loginSuccess(dummyData));
    return dummyData;
  } catch (error: any) {
    dispatch(authActions.loginFailure(error.message));
    throw error;
  }
};

export const logout = () => (dispatch: any) => {
  // Remove cookies
  Cookies.remove('token');
  Cookies.remove('user');
  Cookies.remove('role');

  // Dispatch logout action
  dispatch(authActions.logout());
};