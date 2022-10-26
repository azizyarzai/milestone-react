import React, { useEffect, useState } from "react";
import { Input, Button, InputNumber, Segmented } from "antd";
import firebase from "../clients/firebase";

const url = "/books.json";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState();
  const [pages, setPages] = useState();
  const [formSubmited, setFormSubmited] = useState(true);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (formSubmited)
      firebase
        .get(url)
        .then((res) => {
          console.log(res);
          setBooks(res.data);
        })
        .catch((err) => console.log(err));
  }, [formSubmited]);

  const delteBook = (id) => {
    firebase
      .delete(`/books.json`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const submitForm = (e) => {
    e.preventDefault();
    setError(null);
    setFormSubmited(false);
    const data = { title, author, price, pages };
    firebase
      .post(url, data)
      .then((res) => {
        setFormSubmited(true);
        console.log(res);
        setTitle("");
        setAuthor("");
        setBooks("");
        setPages("");
        setPrice("");
      })
      .catch((err) => {
        setFormSubmited(false);
        setError(err.message);
      });
  };
  return (
    <div>
      <h3>Add Book</h3>
      <form style={{ width: 350 }} onSubmit={submitForm}>
        <div>
          <label>Tile:</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <Input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <InputNumber
            value={price}
            onChange={(value) => setPrice(value)}
            style={{ display: "block", width: "100%" }}
            required
          />
        </div>
        <div>
          <label>No Of Pages:</label>
          <InputNumber
            value={pages}
            onChange={(value) => setPages(value)}
            style={{ display: "block", width: "100%" }}
            required
          />
        </div>
        <Button type="primary" style={{ marginTop: "1rem" }} htmlType="submit">
          Add Book
        </Button>
      </form>
      {error && <p>ERROR: {error}</p>}
      {books.length > 0 ? (
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
              <Button type="primary" onClick={() => delteBook(book.id)}>
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

export default AddBook;
