import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Dashboard</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div className="d-flex align-items-center">
            <form className="d-flex me-2" role="search">
              <div className="input-group">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <span className="input-group-text" id="basic-addon1">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
            </form>
            <button className="btn btn-link p-0 ms-2" type="button" aria-label="Notifications">
              <FontAwesomeIcon icon={faBell} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
