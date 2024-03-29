import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>

            <div
              className={`form-check form-switch  text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              
              style =  {{marginTop: "8px"}}
            >
              <input
                className="form-check-input "
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={props.togglemode}
               
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                Enable {props.mode === "light" ? "dark" : "light"} mode
              </label>
            </div>
            
          </ul>
          <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick = {()=> {props.bgColor('primary')}} style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
          <div className="bg-success rounded mx-2" onClick = {()=> {props.bgColor('success')}} style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
          <div className="bg-warning rounded mx-2" onClick = {()=> {props.bgColor('warning')}} style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
          <div className="bg-danger rounded mx-2" onClick = {()=> {props.bgColor('danger')}} style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
        </div></div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "KajalTextUtils",
  aboutText: "About text",
};
