import React, { useEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import useBooks from "../hooks/useBooks";
import { useDispatch, useSelector } from "react-redux";
import * as booksActions from "../store/books";

const Books = () => {
  // const { getBooks, deleteBook, books, loading, error } = useBooks();

  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    // getBooks();
    dispatch(booksActions.getBooks());
  }, []);

  return (
    <div>
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
              <Button
                type="primary"
                onClick={() => dispatch(booksActions.deleteBook(book.id))}
              >
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
