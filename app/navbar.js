import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="container">
            <Link id="logo" className="navbar-brand kg-logo" href="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2IR7wI__Vx9OoYsInjlpEkzVxifgJlh2Tg&s"
                alt=""
                width="30"
                height="24"
              />
            </Link>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li style={{ padding: "6px" }} className="nav-item">
                  <Link
                    className=" btn btn-outline-secondary primary "
                    aria-current="page"
                    href="/About"
                  >
                    About
                  </Link>
                </li>
                <li style={{ padding: "6px" }} className="nav-item">
                  <Link
                    type="radio"
                    className="btn btn-outline-danger "
                    id="danger-outlined"
                    href="/Product"
                  >
                    Product
                  </Link>
                </li>
                <li style={{ padding: "6px" }} className="nav-item">
                  <Link
                    className="btn btn-outline-primary"
                    for="danger-outlined"
                    href="Carrer"
                  >
                    Movies
                  </Link>
                </li>
              </ul>
              <form className="d-flex" action="https://www.google.com/search">
                <input
                  className="form-control me-2 border border-success border-1 "
                  id="floatingInput"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  name="q"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
        </nav>
     
    </>
  );
};

export default Navbar;
