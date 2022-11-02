import React, { useState, useEffect } from "react";
import firebase from "../clients/firebase";
import { Button } from "antd";
import { useParams, Link, redirect, useNavigate } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState(null);
  const { id, name } = useParams();
  console.log({ id, name });
  useEffect(() => {
    firebase
      .get("/books.json")
      .then((res) => {
        // console.log(res);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
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
  return (
    <div>
      <Button type="primary" onClick={() => navigate(-1)}>
        Go Back
      </Button>
      <Link to="/api/add-book">Add Book</Link>
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
    </div>
  );
};

export default Books;
