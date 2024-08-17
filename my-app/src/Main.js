import React from 'react';
import Navbar from "../src/Navbar/Navbar";
import Sidebar from "../src/Sidebar/Sidebar"; 
import Dashboard from "../src/Dashboard/Dashboard"; 
import { BrowserRouter as Router } from 'react-router-dom';

function Main() {
  return (
    <Router>
      <div className='d-flex'>
        <Sidebar /> 
        <div className="flex-grow-1"> 
          <Navbar /> 
          <div className="p-3">
            
            <Dashboard />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Main;
