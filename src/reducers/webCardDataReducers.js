import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFunction } from "../helpers/fetchFunction";
const initialState = {
  findWeb: [],
  loading: "false",
  weblist: [],
  maintenace_notes: [],
  error: "",
};

export const createWeb = createAsyncThunk("createNote", async (body) => {
  const result = await fetchFunction("/HostBees/addWeb", body, "post", "");
  return result;
});
export const getallWeb = createAsyncThunk("getallNotes", async (body) => {
  const result = await fetchFunction("/HostBees/getallWeb",body=undefined,"get",localStorage.getItem("token"));

  return result;
});

export const getmaintenceWeb = createAsyncThunk("getImpnote", async () => {
  const result = await fetchFunction(
    "/HostBees/maintenace_mode_web",
    "",
    "get",
    ""
  );
  return result;
});

export const deleteWeb = createAsyncThunk("deletenotes", async (id) => {
  const result = await fetchFunction(
    `/HostBees/deleteweb/${id}`,
    "",
    "delete",
    ""
  );
  // console.log(result);
  return result;
});

export const updateWeb = createAsyncThunk(
  "updatenotes",
  async ({ id, web, name }) => {
    console.log(id, web, name);
    const body = { web, name };
    const result = await fetchFunction(
      `/HostBees/updateweb/${id}`,
      body,
      "put",
      ""
    );
    return result;
  }
);

export const findWebByName = createAsyncThunk(
  "findNotesBySubject",
  async (name) => {
    const result = await fetch(`HostBees/findbyname/${name}`, {
      method: "get",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    const res = await result.json();
    return res;
  }
);

export const webReducer = createSlice({
  name: "web",
  initialState,
  reducers: {},
  extraReducers: {
    [createWeb.fulfilled]: (state, action) => {
      state.error = action.payload.error;
      state.weblist.push(action.payload.message);
    },
    [createWeb.pending]: (state, action) => {
      state.loading = true;
    },
    [createWeb.rejected]: (state, action) => {
      state.error = action.payload.message;
    },
    [getallWeb.fulfilled]: (state, action) => {
      state.weblist = action.payload.message;

    },
    [getallWeb.pending]: (state, action) => {
      state.loading = true;
    },
    [getallWeb.rejected]: (state, action) => {
      state.error = "Please Add Note";
    },

    [deleteWeb.fulfilled]: (state, action) => {
      // return state.notelist.filter((item) => {
      //   return item._id != action.payload.message._id;
      // })
      state.error = action.payload.message;
    },
    [updateWeb.fulfilled]: (state, action) => {
      if (action.payload.message == undefined) {
        state.error = "please fill the fileds";
      } else {
        state.error = action.payload.message;
      }
    },
    [updateWeb.pending]: (state, action) => {
      state.loading = true;
    },
    [updateWeb.rejected]: (state, action) => {
      state.error = "Please fill all the fields";
    },
    [findWebByName.fulfilled]: (state, action) => {
      state.findweb = action.payload.message;
    },
    [findWebByName.pending]: (state, action) => {
      state.loading = true;
    },
    [findWebByName.rejected]: (state, action) => {
      state.error = "Note Note found!";
    },

    [getmaintenceWeb.fulfilled]: (state, action) => {
      state.maintenace_notes = action.payload.message;
    },
    [getmaintenceWeb.pending]: (state, action) => {
      state.loading = true;
    },
    [getmaintenceWeb.rejected]: (state, action) => {
      state.error = "Imp Note Not found!";
    },
  },
});

export default webReducer.reducer;
