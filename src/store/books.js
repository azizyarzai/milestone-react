import { createSlice } from "@reduxjs/toolkit";
import firebase from "../clients/firebase";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: false,
    error: null,
  },
  reducers: {
    requestInit: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    reqSuccess: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    reqFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default booksSlice.reducer;

// Action
const { requestInit, reqSuccess, reqFailed } = booksSlice.actions;

export const getBooks = () => (dispatch, getState) => {
  dispatch({ type: requestInit.type });
  firebase
    .get("/books.json")
    .then((res) => {
      dispatch({ type: reqSuccess.type, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: reqFailed.type, payload: err.message });
    });
};

export const deleteBook = (id) => (dispatch, getState) => {
  firebase
    .delete(`/books/${id}.json`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
