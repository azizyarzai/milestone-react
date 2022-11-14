import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

// axios.defaults.baseURL = "https://milestone-9ebad-default-rtdb.firebaseio.com";
// axios.defaults.headers.authorization = "test 1";

// axios.interceptors.request.use((config) => {
//   console.log(config);
//   // config.headers.authorization = "test";
//   return config;
// });

// axios.interceptors.response.use((response) => {
//   let formated_data = [];
//   Object.entries(response.data).forEach((d) => {
//     let obj = { id: d[0], ...d[1] };
//     formated_data.push(obj);
//   });
//   response.data = formated_data;
//   return response;
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
