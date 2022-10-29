import React, { useEffect, useState } from "react";
import { Input, Button, InputNumber, Segmented } from "antd";
import firebase from "../clients/firebase";
import Counter from "../components/Counter";

const url = "/books.json";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState();
  const [pages, setPages] = useState();
  const [error, setError] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    setError(null);
    const data = { title, author, price, pages };
    firebase
      .post(url, data)
      .then((res) => {
        console.log(res);
        setTitle("");
        setAuthor("");
        setPages("");
        setPrice("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div>
      <h3>Add Book</h3>
      <a href="/test">Go To Test</a>
      <Counter />
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
    </div>
  );
};

export default AddBook;
