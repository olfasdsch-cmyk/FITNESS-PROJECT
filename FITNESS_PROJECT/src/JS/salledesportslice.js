import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ==============================
// GET all gyms
// ==============================
export const getsalledesport = createAsyncThunk(
  "salledesport/get",
  async () => {
    try {
      const result = await axios.get("http://localhost:5000/salledesport/");
      // backend sends { salledesports: [...] } according to your route
      return result.data.salledesports || [];
    } catch (error) {
      console.log("Error fetching gyms:", error);
      return [];
    }
  }
);

// ==============================
// ADD new gym
// ==============================
export const addsalledesport = createAsyncThunk(
  "salledesport/add",
  async (newsalledesport) => {
    try {
      const result = await axios.post(
        "http://localhost:5000/salledesport/add",
        newsalledesport
      );
      return result.data.salledesport; // return gym object
    } catch (error) {
      console.log("Error adding gym:", error);
    }
  }
);

// ==============================
// DELETE gym
// ==============================
export const deletesalledesport = createAsyncThunk(
  "salledesport/delete",
  async (id) => {
    try {
      const result = await axios.delete(`http://localhost:5000/salledesport/${id}`);
      return id; // return deleted gym's ID
    } catch (error) {
      console.log("Error deleting gym:", error);
    }
  }
);

// ==============================
// EDIT gym
// ==============================
export const editsalledesport = createAsyncThunk(
  "salledesport/edit",
  async ({ id, edited }) => {
    try {
      const result = await axios.put(`http://localhost:5000/salledesport/${id}`, edited);
      return result.data.salledesport; // return updated gym
    } catch (error) {
      console.log("Error editing gym:", error);
    }
  }
);

// ==============================
// INITIAL STATE
// ==============================
const initialState = {
  salledesportlist: [],
  status: null,
};

// ==============================
// SLICE
// ==============================
export const salledesportSlice = createSlice({
  name: "salledesport",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET gyms
      .addCase(getsalledesport.pending, (state) => { state.status = "pending"; })
      .addCase(getsalledesport.fulfilled, (state, action) => {
        state.status = "success";
        state.salledesportlist = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(getsalledesport.rejected, (state) => { state.status = "fail"; })

      // ADD gym
      .addCase(addsalledesport.pending, (state) => { state.status = "pending"; })
      .addCase(addsalledesport.fulfilled, (state, action) => {
        state.status = "success";
        if (action.payload) state.salledesportlist.push(action.payload);
      })
      .addCase(addsalledesport.rejected, (state) => { state.status = "fail"; })

      // DELETE gym
      .addCase(deletesalledesport.pending, (state) => { state.status = "pending"; })
      .addCase(deletesalledesport.fulfilled, (state, action) => {
        state.status = "success";
        state.salledesportlist = state.salledesportlist.filter(
          (gym) => gym._id !== action.payload
        );
      })
      .addCase(deletesalledesport.rejected, (state) => { state.status = "fail"; })

      // EDIT gym
      .addCase(editsalledesport.pending, (state) => { state.status = "pending"; })
      .addCase(editsalledesport.fulfilled, (state, action) => {
        state.status = "success";
        state.salledesportlist = state.salledesportlist.map((gym) =>
          gym._id === action.payload._id ? action.payload : gym
        );
      })
      .addCase(editsalledesport.rejected, (state) => { state.status = "fail"; });
  },
});

export default salledesportSlice.reducer;