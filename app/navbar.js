import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Kamran Irshad
          </Link>
          {/* <!-- toggle button --> */}
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- --sidebar --> */}
          <div
            className=" sidebar bg-black offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            {/* <!-- sidebar header --> */}
            <div className="offcanvas-header text-white border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            {/* <!-- sidebar body --> */}
            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className="nav-link active mx-2"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link" href="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link" href="/Movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link" href="/Product">
                    Product
                  </Link>
                </li>
              </ul>
              <form className="d-flex mx-2" role="search">
                <input
                  className="form-control me-2 text-white text-bold"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-light border border-1" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
