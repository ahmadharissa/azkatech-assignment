import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import App from "./App";
import store from "./Redux/store";
import Loader from "./layouts/loader/Loader";

import "./index.css";

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
