import { configureStore } from "@reduxjs/toolkit";

import authReducers from "../reducers/authReducers";
import  webReducer  from "../reducers/webCardDataReducers";
export const store = configureStore({
  reducer: {
    user: authReducers,
    web: webReducer,
  },
});
