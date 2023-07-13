import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {axiosClient} from "../utils/axiosClient";

export const fetchTopLeaders = createAsyncThunk("api/top-leaders", async () => {
  try {
    const response = await axiosClient.get("/top-leaders?populate=images");
    return response.data.data;
  } catch (error) {
    return Promise.reject(error);
  }
});

const topLeaderSlice = createSlice({
  name: "topLeaderSlice",
  initialState: {
    topLeaders: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTopLeaders.fulfilled, (state, action) => {
      state.topLeaders = action.payload;
    });
  },
});

export default topLeaderSlice.reducer;
