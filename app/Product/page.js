"use client";
import React, { useState } from "react";

const Product = () => {
  const [counter, setcounter] = useState(1);
  let random = () => {
    setcounter(Math.floor(Math.random() * 100000));
  };
  return (
    <>
      <h3 className="bg-dark text-light fw-bolder text-center m-3 p-2 rounded-pill">
        RandomCunter
      </h3>
      <div className="d-flex justify-content-evenly">
        <h1 className="bg-info">{counter}</h1>
        <button className=" rounded-5 btn btn-warning" onClick={random}>
          Increase
        </button>
      </div>
    </>
  );
};

export default Product;
