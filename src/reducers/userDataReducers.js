import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFunction } from "../helpers/fetchFunction";

const initialState = {
  loading: false,
  message: "",
  userData: [],
  error: "",
};

export const getUserData = createAsyncThunk("getUserData", async (body) => {
  const result = await fetchFunction(
    "/HostBees/getUser",
    "",
    "get",
    localStorage.getItem("token")
  );
  return result;
});
export const updateUserData = createAsyncThunk(
  "updateUserData",
  async (body) => {
    const result = await fetchFunction(
      "/HostBees/updateUser",
      body,
      "post",
      localStorage.getItem("token")
    );
    return result;
  }
);

export const deleteUserData = createAsyncThunk(
  "deleteUserData",
  async (body) => {
    const result = await fetchFunction(
      "/HostBees/deleteUser",
      body,
      "delete",
      localStorage.getItem("token")
    );
    return result;
  }
);

const userInfo = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.message = [action.payload.message, ...state.message];
    },

    storeMessage: (state, action) => {
      localStorage.setItem("messages", state.message);
    },
  },
  //actions put in extraReducers
  extraReducers: {
    [getUserData.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = action.payload.data;
    },
    [getUserData.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserData.rejected]: (state, action) => {
      state.error = "Check Your Internet Connection";
    },
    [updateUserData.fulfilled]: (state, action) => {
      state.laoding = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.message = [action.payload.message, ...state.message];
      }
    },
    [updateUserData.pending]: (state, action) => {
      state.loading = true;
    },
    [updateUserData.fulfilled]: (state, action) => {
      state.error = "Check Your Internet Connection";
    },
  },
});

export const { addMessage, storeMessage } = userInfo.actions;
export default userInfo.reducer;
