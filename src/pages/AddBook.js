import React, { useEffect, useState } from "react";
import { Input, Button, InputNumber, Segmented } from "antd";
import firebase from "../clients/firebase";
import Counter from "../components/Counter";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

const url = "/books.json";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState();
  const [pages, setPages] = useState();
  const [error, setError] = useState(null);
  const location = useLocation();

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
  console.log(location.pathname);
  const navigate = useNavigate();
  return (
    <div>
      <h3>Add Book</h3>
      <Button type="primary" onClick={() => navigate(-1)}>
        Go Back
      </Button>
      <Link to="/api/45/amin">Go Back</Link>
      <div>
        <Routes>
          <Route
            path={`${location.pathname}/test`}
            element={<h1>Test Element</h1>}
          />
          <Route path="/api/add-book/new" element={<h1>NEw Element</h1>} />
        </Routes>
      </div>
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
