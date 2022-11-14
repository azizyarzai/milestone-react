import { useReducer } from "react";
import firebase from "../clients/firebase";

const productReducer = (state, action) => {
  switch (action.type) {
    case "requestInit":
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };

    case "reqSuccess":
      return {
        ...state,
        loading: false,
        books: action.data,
      };

    case "reqFailed":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const useBooks = () => {
  const [state, dispatch] = useReducer(productReducer, {
    books: [],
    laoding: false,
    error: null,
  });

  const getBooks = () => {
    dispatch({ type: "requestInit" });
    firebase
      .get("/books.json")
      .then((res) => {
        dispatch({ type: "reqSuccess", data: res.data });
      })
      .catch((err) => {
        dispatch({ type: "reqFailed", payload: err.message });
      });
  };

  const deleteBook = (id) => {
    firebase
      .delete(`/books/${id}.json`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return {
    getBooks,
    deleteBook,
    books: state.books,
    loading: state.loading,
    error: state.error,
  };
};

export default useBooks;
