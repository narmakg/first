"use client";
import { useState } from "react";

const TodoList = ({ value }) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const Submit = (p) => {
    p.preventDefault();
    setmainTask([...mainTask, { title, description }]);
    settitle("");
    setdescription("");
  };
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };
  let renderTast = <h2>NO Task Avilible</h2>;
  if (mainTask.length > 0) {
    renderTast = mainTask.map((t, i) => {
      return (
        <li key={i} className="fw-bold ms-3 fs-5">
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold text-capitalize fs-3">{t.title}</h5>
            <h6 className="fw-bold text-uppercase fs-4">{t.description}</h6>
            <button
              onClick={() => {
                deleteHandler(i);
              }}
              className="btn btn-danger mb-2"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }
  return (
    <div>
      <div className="container">
        <form onSubmit={Submit}>
          <div className="row ">
            <h1 className="btn btn-dark fw-bold mb-4 rounded-pill">Todo List</h1>

            <div className="col-4">
              <input
                type="text"
                className="form-control border border-3 border-dark rounded-pill "
                placeholder="Enter Your Todo"
                value={title}
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control border border-3 border-dark rounded-pill "
                placeholder="Enter The Discription"
                value={description}
                onChange={(d) => {
                  setdescription(d.target.value);
                }}
              />
            </div>
            <div className="col-2">
              <button className="btn btn-warning rounded-5 ">{value}</button>
            </div>
          </div>
        </form>
        <div className="bg-info p-2 m-3 row ">
          <ol>{renderTast}</ol>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
