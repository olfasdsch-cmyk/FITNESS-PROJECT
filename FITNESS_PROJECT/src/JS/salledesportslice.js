import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getsalledesport = createAsyncThunk("salledesport/get", async () => {
  try {
    let result = await axios.get("http://localhost:5000/salledesport/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const addsalledesport = createAsyncThunk("salledesport/add", async (newsalledesport) => {
  try {
    let result = await axios.post("http://localhost:5000/salledesport/add", newsalledesport);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deletesalledesport = createAsyncThunk("salledesport/delete", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/salledesport/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editsalledesport = createAsyncThunk(
  "salledesport/edit",
  async ({ id, edited }) => {
    try {
      let result = await axios.put(`http://localhost:5000/salledesport/${id}`, edited);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  salledesportlist: null,
  status: null,
};

export const salledesportSlice = createSlice({
  name: "salledesport",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getsalledesport.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getsalledesport.fulfilled, (state, action) => {
        state.status = "success";
        state.salledesportlist = action.payload.data.salledesports;
      })
      .addCase(getsalledesport.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(addsalledesport.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addsalledesport.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addsalledesport.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(deletesalledesport.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deletesalledesport.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deletesalledesport.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(editsalledesport.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editsalledesport.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editsalledesport.rejected, (state) => {
        state.status = "fail";
      });
  },
});

// Action creators are generated for each case reducer function

export default salledesportSlice.reducer;