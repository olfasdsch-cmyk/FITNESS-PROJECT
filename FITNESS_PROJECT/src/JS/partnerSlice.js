import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ----- Async Thunks -----

export const getPartner = createAsyncThunk(
  "partner/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:5000/partner/");
      return res.data.partners;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || "Failed to fetch partners");
    }
  }
);

export const addPartner = createAsyncThunk(
  "partner/add",
  async (newPartner, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/partner/add", newPartner);
      return res.data.partner;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || "Failed to add partner");
    }
  }
);

export const deletePartner = createAsyncThunk(
  "partner/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:5000/partner/${id}`);
      return id;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || "Failed to delete partner");
    }
  }
);

export const editPartner = createAsyncThunk(
  "partner/edit",
  async ({ id, edited }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`http://localhost:5000/partner/${id}`, edited);
      return res.data.partner;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || "Failed to edit partner");
    }
  }
);

// ----- Slice -----

const initialState = {
  partnerList: [],
  status: "idle",
  error: null,
};

const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get Partners
      .addCase(getPartner.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(getPartner.fulfilled, (state, action) => { state.status = "succeeded"; state.partnerList = action.payload; })
      .addCase(getPartner.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

      // Add Partner
      .addCase(addPartner.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(addPartner.fulfilled, (state, action) => { state.status = "succeeded"; state.partnerList.push(action.payload); })
      .addCase(addPartner.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

      // Delete Partner
      .addCase(deletePartner.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(deletePartner.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.partnerList = state.partnerList.filter(p => p._id !== action.payload);
      })
      .addCase(deletePartner.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

      // Edit Partner
      .addCase(editPartner.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(editPartner.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.partnerList = state.partnerList.map(p => p._id === action.payload._id ? action.payload : p);
      })
      .addCase(editPartner.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; });
  },
});

export default partnerSlice.reducer;