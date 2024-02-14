import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary container">
        <div className="container-fluid container mt-3">
          <a className="navbar-brand" href="#">
            <img src={require("../assets/logo.png")} alt="" />
          </a>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-justify-right text-white"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
{/*               <a
                style={{ color: "#ff7686", fontWeight: "600" }}
                className="nav-link active"
                aria-current="page"
                href="#about"
              >
                About
              </a>
              <a
                style={{ color: "#ff7686", fontWeight: "600" }}
                className="nav-link"
                href="#experience"
              >
                Experience
              </a>
              <a
                style={{ color: "#ff7686", fontWeight: "600" }}
                className="nav-link"
                href="#project"
              >
                Project
              </a>
              <a
                style={{ color: "#ff7686", fontWeight: "600" }}
                className="nav-link"
                href="#connect"
              >
                Connect
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
