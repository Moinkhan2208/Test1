import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav className="navbar navar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Test Project
                </a>
               {/**  <button  className="navbar-toggeler" type="button"                  data-bs-toggle="collapse"                  data-bs-target="#navbarSupportedContent"                  aria-controls="navbarSupportedContent"                  aria-expanded="false"                  aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button> */}

                  <Link className="btn btn-outline-light" to="adduser">Add User</Link>
            </div>
        </nav>
    </div>
  )
};

export default Navbar;