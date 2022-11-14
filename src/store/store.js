import { configureStore, combineReducers } from "@reduxjs/toolkit";
import booksReducer from "./books";
import authReducer from "./auth";

const reducer = combineReducers({
  books: booksReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer,
});

export default store;
