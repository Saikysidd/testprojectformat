import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Sidebar.css';

const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <button
        className={`btn btn-primary d-md-none ${isSidebarVisible ? '' : 'd-block'}`} 
        onClick={toggleSidebar}
        style={{ position: 'fixed', top: 10, left: 10, zIndex: 1050 }}
      >
        <i className="bi bi-list"></i>
      </button>
      <div className={`d-flex flex-column vh-100 sidebar ${isSidebarVisible ? 'd-block' : 'd-none d-md-block'}`}>
        <div className="p-3 text-center sidebar-brand">
          <h2 className="ditch-text">Ditch</h2>
          <h2 className="dollar-text">Dollar</h2>
        </div>
        <ul className="nav flex-column p-3">
          <li className="nav-item mb-2">
            <Link to="/dashboard" className="nav-link text-light">
              <i className="bi bi-grid-fill"></i> Dashboard
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/crm" className="nav-link text-light">
              <i className="bi bi-people-fill"></i> CRM
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/mam" className="nav-link text-light">
              <i className="bi bi-box"></i> MAM
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/pamm" className="nav-link text-light">
              <i className="bi bi-clock-fill"></i> PAMM
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/trade" className="nav-link text-light">
              <i className="bi bi-currency-exchange"></i> Trade
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/wallet" className="nav-link text-light">
              <i className="bi bi-wallet-fill"></i> Wallet
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/accounts" className="nav-link text-light">
              <i className="bi bi-cash-stack"></i> Accounts
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/history" className="nav-link text-light">
              <i className="bi bi-clock-history"></i> History
            </Link>
          </li>
        </ul>
        <div className="bg-purple mt-auto p-3">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/notifications" className="nav-link text-light">
                <i className="bi bi-bell-fill"></i> Notifications
              </Link>
            </li>
            <li className="bg-purple nav-item mb-2">
              <Link to="/settings" className="nav-link text-light">
                <i className="bi bi-gear-fill"></i> Settings
              </Link>
            </li>
            <li className="bg-purple nav-item mb-2">
              <Link to="/help-support" className="nav-link text-light">
                <i className="bi bi-headset"></i> Help & Support
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/logout" className="nav-link text-light">
                <i className="bi bi-box-arrow-left"></i> Log Out
              </Link>
            </li>
          </ul>
          <div className="user-info mt-3 text-light text-center d-flex align-items-center justify-content-center">
            <i className="bi bi-person-circle me-2">  Mohd Saqlain Siddiqui</i> 
          </div>
          <p className="text-muted text-center">mohdsaqlain598@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
