import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getactivities = createAsyncThunk("activities/get", async () => {
  try {
    let result = await axios.get("http://localhost:5000/activities/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const addactivities = createAsyncThunk("activities/add", async (newactivities) => {
  try {
    let result = await axios.post("http://localhost:5000/activities/add", newactivities);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deleteactivities = createAsyncThunk("activities/delete", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/activities/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editactivities = createAsyncThunk(
  "activities/edit",
  async ({ id, edited }) => {
    try {
      let result = await axios.put(`http://localhost:5000/activities/${id}`, edited);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  activitieslist: null,
  status: null,
};

export const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getactivities.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getactivities.fulfilled, (state, action) => {
        state.status = "success";
        state.activitieslist = action.payload.data.activitiess;
      })
      .addCase(getactivities.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(addactivities.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addactivities.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addactivities.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(deleteactivities.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteactivities.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deleteactivities.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(editactivities.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editactivities.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editactivities.rejected, (state) => {
        state.status = "fail";
      });
  },
});

// Action creators are generated for each case reducer function

export default activitiesSlice.reducer;