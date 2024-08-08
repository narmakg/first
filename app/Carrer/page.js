import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "../Movies";
const Carear = () => {
  return (
    <div>
      <h2 className="bg-dark mb-4 text-light fw-bolde rounded-3 text-center">
        AllMoviesHub
      </h2>
      <Movies />
      <Movies />
      <Movies />
      <Movies />
    </div>
  );
};

export default Carear;
