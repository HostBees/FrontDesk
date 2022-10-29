import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFunction } from "../helpers/fetchFunction";

const initialState = {
  token: "",
  loading: false,
  error: "",
};

export const signupUser = createAsyncThunk("signupUser", async (body) => {
  console.log(body);
  const result = await fetchFunction("/HostBees/signup", body, "post", "");
  console.log(result);
  return result;
});

export const signinUser = createAsyncThunk("signinUser", async (body) => {
  console.log(body);
  const result = await fetchFunction("HostBees/signin", body, "post", "");

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
        console.log(state.error);
      } else {
        state.error = action.payload.message;
        console.log(state.error);
      }
    },
    [signupUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signupUser.rejected]: (state, action) => {
      state.error = "Rejected";
    },

    [signinUser.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        if (action.payload.message) state.error = action.payload.message;
        state.token = action.payload.token;
        if (state.token === undefined) {
          state.error = action.payload.message;
        } else {
          localStorage.setItem("token", action.payload.token);
        }
      }
    },

    [signinUser.pending]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { addToken, logout } = authReducer.actions;
export default authReducer.reducer;
