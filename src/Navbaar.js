import React from "react";
import "./style.css"


import { Outlet,Link } from "react-router-dom";

const Navbaar = () => {
  return (
    <>
      <div >
        <nav >
          <ul>
            <li>
              
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              
              <Link to="/contact">Contact</Link>
            </li>
            
          </ul>
        </nav>
      </div>
      <Outlet/>
    </>
  );
};

export default Navbaar;
