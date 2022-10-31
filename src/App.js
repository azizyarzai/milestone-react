import AddBook from "./pages/AddBook";
import Books from "./pages/Books";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div style={{ marginLeft: "250px" }}>
      <Routes>
        <Route path="/api">
          <Route path=":id/:name" element={<Books />} />
          <Route path="add-book/*" element={<AddBook />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
