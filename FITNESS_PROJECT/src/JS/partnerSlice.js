import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getpartner = createAsyncThunk("partner/get", async () => {
  try {
    let result = await axios.get("http://localhost:5000/partner/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const addpartner = createAsyncThunk("partner/add", async (newpartner) => {
  try {
    let result = await axios.post("http://localhost:5000/partner/add", newpartner);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deletepartner = createAsyncThunk("partner/delete", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/partner/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editpartner = createAsyncThunk(
  "partner/edit",
  async ({ id, edited }) => {
    try {
      let result = await axios.put(`http://localhost:5000/partner/${id}`, edited);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  partnerlist: null,
  status: null,
};

export const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getpartner.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getpartner.fulfilled, (state, action) => {
        state.status = "success";
        state.partnerlist = action.payload.data.partners;
      })
      .addCase(getpartner.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(addpartner.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addpartner.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addpartner.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(deletepartner.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deletepartner.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deletepartner.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(editpartner.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editpartner.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editpartner.rejected, (state) => {
        state.status = "fail";
      });
  },
});

// Action creators are generated for each case reducer function

export default partnerSlice.reducer;