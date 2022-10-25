import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFunction } from "../helpers/fetchFunction";
const initialState = {
  token: "",
  loading: false,
  error: "",
};

export const signupUser = createAsyncThunk("signupUser", async (body) => {
  const result = await fetchFunction("/signup", body);

  return result;
});

export const signinUser = createAsyncThunk("signinUser", async (body) => {
  const result = await fetchFunction("/signin", body);
  return result;
});

const authReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    //actions
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  //actions put in extraReducers
  extraReducers: {
    [signupUser.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.error = action.payload.message;
      }
    },
    [signupUser.pending]: (state, action) => {
      state.loading = true;
    },

    [signinUser.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.error = action.payload.message;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      }
    },

    [signinUser.pending]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { addToken, logout } = authReducer.actions;
export default authReducer.reducer;
