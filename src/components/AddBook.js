import React, { useEffect, useState } from "react";
import { Input, Button, InputNumber } from "antd";
import axios from "axios";

const url = "/books.json";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState();
  const [pages, setPages] = useState();
  const [formSubmited, setFormSubmited] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (formSubmited)
      axios
        .get(url)
        .then((res) => {
          console.log(res);
          let formated_data = [];
          Object.entries(res.data).forEach((d) => {
            let obj = { id: d[0], ...d[1] };
            formated_data.push(obj);
          });
          setBooks(formated_data);
        })
        .catch((err) => console.log(err));
  }, [formSubmited]);

  console.log(books);

  const submitForm = (e) => {
    e.preventDefault();
    setFormSubmited(false);
    const data = { title, author, price, pages };
    axios
      .post(url, data)
      .then((res) => {
        setFormSubmited(true);
        setTitle("");
        console.log(res);
        setAuthor("");
        setBooks("");
        setPages("");
        setPrice("");
      })
      .catch((err) => {
        setFormSubmited(false);
        console.log(err);
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
              style={{ border: "1px solid green", width: 250, margin: "1rem" }}
            >
              <p>id : {book.id}</p>
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}AFN</p>
              <p>Pages: {book.pages}</p>
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
