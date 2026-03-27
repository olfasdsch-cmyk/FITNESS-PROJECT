import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getreservation = createAsyncThunk("reservation/get", async () => {
  try {
    let result = await axios.get("http://localhost:5000/reservation/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const addreservation = createAsyncThunk("reservation/add", async (newreservation) => {
  try {
    let result = await axios.post("http://localhost:5000/reservation/add", newreservation);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deletereservation = createAsyncThunk("reservation/delete", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/reservation/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editreservation = createAsyncThunk(
  "reservation/edit",
  async ({ id, edited }) => {
    try {
      let result = await axios.put(`http://localhost:5000/reservation/${id}`, edited);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  reservationlist: null,
  status: null,
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getreservation.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getreservation.fulfilled, (state, action) => {
        state.status = "success";
        state.reservationlist = action.payload.data.reservations;
      })
      .addCase(getreservation.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(addreservation.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addreservation.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addreservation.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(deletereservation.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deletereservation.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deletereservation.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(editreservation.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editreservation.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editreservation.rejected, (state) => {
        state.status = "fail";
      });
  },
});

// Action creators are generated for each case reducer function

export default reservationSlice.reducer;