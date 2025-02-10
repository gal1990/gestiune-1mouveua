import { combineReducers } from '@reduxjs/toolkit';
import websiteReducer from '../slices/website/website-slice';
import authReducer from '../slices/auth/auth-slice';

const rootReducer = combineReducers({
  website: websiteReducer,
  auth: authReducer,
});

export default rootReducer;