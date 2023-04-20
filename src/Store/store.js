import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../axiosConfig/instanc";

const epicState = {
  games: [],
  categories: [],
  loader: false,
};

export const getGames = createAsyncThunk(
  //action type string
  "epic/getGames",
  // callback function
  async () => {
    const res = await axiosInstance.get("/Games");
    const data = await res.data;
    return data;
  }
);

export const getCategories = createAsyncThunk(
  "epic/getCategories",
  async () => {
    try {
      const res = await axios.get("http://localhost:5555/Category", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY",
        },
      });
      return res.data;
    } catch (err) {}
  }
);

const epicSlice = createSlice({
  name: "epic",
  initialState: epicState,
  reducers: {},
  extraReducers: (builder) => {
    /// getGames
    builder.addCase(getGames.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getGames.fulfilled, (state, action) => {
      state.loader = false;
      state.games = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getGames.rejected, (state) => {});

    /// getCategories
    builder.addCase(getCategories.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loader = false;
      state.categories = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getCategories.rejected, (state) => {});
  },
});

const store = configureStore({
  reducer: {
    epic: epicSlice.reducer,
  },
});

export const epicActions = epicSlice.actions;

export default store;
