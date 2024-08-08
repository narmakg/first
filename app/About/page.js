import React from "react";

export default function PakistaniClock() {
  let Time = new Date();
  return (
    <div>
      <h1 className="fw-bolder">Pakistani Clock</h1>
      <p className="lead">
        This is the clock that shows time in pakistan in all times
      </p>
      <p className="lead">
        This is the Current Time :{Time.toLocaleDateString()} -{" "}
        {Time.toLocaleTimeString()}
      </p>
    </div>
  );
}
