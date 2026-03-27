import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ----- Async Thunks -----

export const userRegister = createAsyncThunk(
  "user/register",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/user/register", user);
      return { user: res.data.user, token: res.data.token };
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || "Registration failed");
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/user/login", user);
      return { user: res.data.user, token: res.data.token };
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

export const userCurrent = createAsyncThunk(
  "user/current",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return rejectWithValue("No token found");
      const res = await axios.get("http://localhost:5000/user/current", {
        headers: { Authorization: token },
      });
      return res.data.user;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || "Fetching current user failed");
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async (updatedData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return rejectWithValue("No token found");
      const res = await axios.put("http://localhost:5000/user/update", updatedData, {
        headers: { Authorization: token },
      });
      return res.data.user;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || "Update failed");
    }
  }
);

// ----- Slice -----

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(userRegister.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(userRegister.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

      // Login
      .addCase(userLogin.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(userLogin.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

      // Current User
      .addCase(userCurrent.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(userCurrent.fulfilled, (state, action) => { state.status = "succeeded"; state.user = action.payload; })
      .addCase(userCurrent.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

      // Update
      .addCase(updateUser.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(updateUser.fulfilled, (state, action) => { state.status = "succeeded"; state.user = action.payload; })
      .addCase(updateUser.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;