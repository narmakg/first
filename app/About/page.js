import React from "react";

export default function PakistaniClock() {
  let Time = new Date();
  return (
    <div>
      <h1 className="fw-bolder text-center bg-dark text-light rounded-pill mx-4 ">Pakistani Clock</h1>
      <div className="text-center p-4">
      <p className="lead">
        This is the clock that shows time in pakistan in all times
      </p>
      <p className="lead bg-warning fw-bolder">
        This is the Current Time :<span className="fw-bolder bg-danger text-light ms-2 rounded-2 border border-3 border-dark">{Time.toLocaleDateString()} -{" "} {Time.toLocaleTimeString()}</span>
        
      </p>
      </div>
    </div>
  );
}
