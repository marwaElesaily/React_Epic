import { combineReducers } from "redux";
// import addFav from './addFav';
// import removeFav from './removeFav';
import changeGames from './Games';
import loaderReducer from "./loader";
import categoriesReducer from "./categories";
import languageReducer from "./language";

export default combineReducers({

    // addFav:addFav,
    // removeFav:removeFav,
    changeGames:changeGames,
    loader:loaderReducer,
    categories:categoriesReducer,
    language:languageReducer
})
