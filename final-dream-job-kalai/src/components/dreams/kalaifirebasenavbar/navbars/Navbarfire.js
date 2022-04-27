import React from "react";
import { Link } from "react-router-dom";

function Navbarfire(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form class="d-flex gap-5 px-3">
              <Link
                to="/firelogin"
                style={{ textDecoration: "none", color: "black" }}
              >
                Login
              </Link>
              <Link
                to="/firesignup"
                style={{ textDecoration: "none", color: "black" }}
              >
                Signup
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbarfire;
