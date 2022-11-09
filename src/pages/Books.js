import React, { useState, useEffect, useCallback, useReducer } from "react";
import firebase from "../clients/firebase";
import { Button } from "antd";
import { useParams, Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";

const productReducer = (state, action) => {
  switch (action.type) {
    case "requestInit":
      return {
        ...state,
        book: [],
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

const Books = () => {
  // const [books, setBooks] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const [state, dispatch] = useReducer(productReducer, {
    books: [],
    laoding: false,
    error: null,
  });

  const { books, loading, error } = state;

  console.log(state);
  const { id, name } = useParams();
  // console.log({ id, name });

  // const test = () => {
  //   console.log("test");
  // };

  const test = useCallback(() => {
    console.log("TEst");
  }, []);
  useEffect(() => {
    // setLoading(true);
    // setError(null);
    // setBooks([]);
    dispatch({ type: "requestInit" });
    firebase
      .get("/books.json")
      .then((res) => {
        // setLoading(false);
        // // console.log(res);
        // setBooks(res.data);

        dispatch({ type: "reqSuccess", data: res.data });
      })
      .catch((err) => {
        // setLoading(false);
        // setError(err.message);
        // console.log(err);
        dispatch({ type: "reqFailed", payload: err.message });
      });
  }, []);

  const deleteBook = (id) => {
    firebase
      .delete(`/books.json`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("Timeout called");
  //     return navigate("/api/add-book");
  //   }, 5000);
  // }, []);

  const [products, setProduct] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/products/viewset")
  //     .then((res) => setProduct(res.data));
  // }, []);
  return (
    <div>
      <Button type="primary" onClick={() => navigate(-1)}>
        Go Back
      </Button>
      <Link to="/api/add-book">Add Book</Link>
      <p style={{ color: "red" }}>{error}</p>
      <p>{loading && "loading .... "}</p>
      {books ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {books.map((book) => (
            <div
              key={book.id}
              style={{ border: "1px solid green", width: 250, margin: "1rem" }}
            >
              <p>id : {book.id}</p>
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}AFN</p>
              <p>Pages: {book.pages}</p>
              <Button type="primary" onClick={() => deleteBook(book.id)}>
                Delete
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p>No Books Available</p>
      )}

      {/* <div>
        {products.map((p) => (
          <div>
            <ul>
              <li>Id - {p.id}</li>
              <li>Name - {p.name}</li>
              <li>Price - {p.price}</li>
              <li>Category - {p.category}</li>
            </ul>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Books;
