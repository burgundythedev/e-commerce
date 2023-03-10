import React from "react";
import "./Error.scss";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="error">
      <div className="error__container">
        <h1 className="error__text"> 404 error</h1>
      </div>
      <div className="error__box">
        <p className="error__page"></p>
        <Link to="/" className="error__link">
          Go Back to Homepage
        </Link>
      </div>
    </div>
  );
}

export default Error;
