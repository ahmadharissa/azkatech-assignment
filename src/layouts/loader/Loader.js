import React from "react";
import { Spinner } from "reactstrap";

import "./loader.css";

const Loader = () => (
  <div className="fallback-spinner">
    <div className="loading">
      <Spinner color="primary" />
    </div>
  </div>
);

export default Loader;
