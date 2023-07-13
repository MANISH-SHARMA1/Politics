import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../utils/axiosClient";

export const fetchPresentLeaders = createAsyncThunk(
  "api/present-leaders",
  async () => {
    try {
      const response = await axiosClient.get(
        "/present-leaders?populate=images"
      );
      return response.data.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const presentLeaderSlice = createSlice({
  name: "presentLeaderSlice",
  initialState: {
    presentLeaders: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPresentLeaders.fulfilled, (state, action) => {
      state.presentLeaders = action.payload;
    });
  },
});

export default presentLeaderSlice.reducer;
