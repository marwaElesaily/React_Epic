import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axiosInstance from "../axiosConfig/instanc";

let user = JSON.parse(localStorage.getItem("user"));

const epicState = {
  games: [],
  categories: [],
  loader: false,
  language: "en",
  gameDetails: {},
  loggedIn: user ? true : false,
  token:
    localStorage.getItem("token") !== null
      ? localStorage.getItem("token")
      : null,
  id: user ? user._id : null,
  email: user ? user.email : null,
  displayName: user ? user.displayName : null,
  cart: [],
};

export const createUser = createAsyncThunk(
  //action type string
  "epic/createUser",
  // callback function
  async (data) => {
    const response = await axiosInstance.post(`/User`, {
      ...data,
    });
    return response.data;
  }
);
export const login = createAsyncThunk(
  //action type string
  "epic/login",
  // callback function
  async (data) => {
    const response = await axiosInstance.post(`/User/login`, {
      ...data,
    });
    return response.data;
  }
);
export const getGameById = createAsyncThunk(
  //action type string
  "epic/getGameById",
  // callback function
  async ({ id }) => {
    const res = await axiosInstance.get(`/Games/${id}`);
    return res.data;
  }
);
export const addToCart = createAsyncThunk(
  //action type string
  "epic/addToCart",
  // callback function
  async ({ userId, gameId }) => {
    const res = await axiosInstance.patch(`/User/${userId}/${gameId}`);
    return res.data;
  }
);
export const removeFromCart = createAsyncThunk(
  //action type string
  "epic/removeFromCart",
  // callback function
  async ({ userId, gameId }) => {
    const res = await axiosInstance.patch(
      `/User/removeFromCart/${userId}/${gameId}`
    );
    return res.data;
  }
);
export const getCartList = createAsyncThunk(
  "epic/getCartList",
  async ({ id }) => {
    try {
      const res = await axiosInstance.get(`/User/getCart/${id}`);
      return res.data;
    } catch (err) {}
  }
);
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
      const res = await axiosInstance.get("Category");
      return res.data;
    } catch (err) {}
  }
);

const epicSlice = createSlice({
  name: "epic",
  initialState: epicState,
  reducers: {
    changeLang(state, action) {
      state.language = action.payload;
    },
    signOut(state, action) {
      state.loggedIn = false;
      localStorage.clear();
      console.log("signedOut");
    },
  },
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

    /// getGameById
    builder.addCase(getGameById.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getGameById.fulfilled, (state, action) => {
      state.loader = false;
      state.gameDetails = { ...action.payload, photos: action.payload.Photos };
      console.log(action.payload);
    });
    builder.addCase(getGameById.rejected, (state) => {});

    /// createUser
    builder.addCase(createUser.pending, (state) => {});
    builder.addCase(createUser.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(createUser.rejected, (state) => {});
    /// login
    builder.addCase(login.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loggedIn = true;
      state.loader = false;
      state.displayName = action.payload.user.displayName;
      state.token = action.payload.token;
      state.email = action.payload.user.email;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
      console.log(action.payload);
    });
    builder.addCase(login.rejected, (state) => {});

    /// addToCart
    builder.addCase(addToCart.pending, (state) => {});
    builder.addCase(addToCart.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(addToCart.rejected, (state) => {});

    /// getCartList
    builder.addCase(getCartList.pending, (state) => {});
    builder.addCase(getCartList.fulfilled, (state, action) => {
      state.cart = action.payload.cart;
      console.log(action.payload);
    });
    builder.addCase(getCartList.rejected, (state) => {});
    /// removeFromCart
    builder.addCase(removeFromCart.pending, (state) => {});
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(removeFromCart.rejected, (state) => {});
  },
});

const store = configureStore({
  reducer: {
    epic: epicSlice.reducer,
  },
});

export const epicActions = epicSlice.actions;

export default store;
