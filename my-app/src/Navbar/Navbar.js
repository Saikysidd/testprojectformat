import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // const SearchIcon = () => (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     fill="none"
  //     viewBox="0 0 24 24"
  //     strokeWidth={2.5}
  //     stroke="currentColor"
  //     className="w-6 h-6"
  //   >
  //     <path
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       d="M21 21l-4.35-4.35m2.6-5.9A7.75 7.75 0 1110.75 3a7.75 7.75 0 018.5 8.5z"
  //     />
  //   </svg>
  // )
  const Bell = () => (
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.4 10.375H13.75V11.725H0.25V10.375H1.6V5.65C1.6 4.21783 2.16893 2.84432 3.18162 1.83162C4.19432 0.818927 5.56783 0.25 7 0.25C8.43217 0.25 9.80568 0.818927 10.8184 1.83162C11.8311 2.84432 12.4 4.21783 12.4 5.65V10.375ZM11.05 10.375V5.65C11.05 4.57587 10.6233 3.54574 9.86378 2.78622C9.10426 2.0267 8.07413 1.6 7 1.6C5.92587 1.6 4.89574 2.0267 4.13622 2.78622C3.3767 3.54574 2.95 4.57587 2.95 5.65V10.375H11.05ZM4.975 13.075H9.025V14.425H4.975V13.075Z" fill="#667085"/>
    </svg>
    
  )
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
                  {/* <SearchIcon/> */}
                </span>
              </div>
            </form>
            <button className="btn btn-link p-0 ms-2" type="button" aria-label="Notifications">
              <Bell  />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
