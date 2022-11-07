import AddBook from "./pages/AddBook";
import Books from "./pages/Books";
import {
  Route,
  Routes,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";

function App() {
  // if (true) {
  //   const [test, setTest] = useState();
  // }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="api"
        element={
          <div>
            <h1>Parent Comp</h1>
            <Outlet />
          </div>
        }
      >
        {/* <Route path=":id/:name" element={<Books />} /> */}
        <Route path="books" element={<Books />} />
        <Route path="add-book/*" element={<AddBook />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    )
  );
  return (
    <div style={{ marginLeft: "250px" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
