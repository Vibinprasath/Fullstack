import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">

        <div className="navbar-header">
          <button className="navbar-toggler" data-toggle="open-navbar1">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="#">
            <h4>WELCOME</h4>
          </a>
        </div>

        <div className="navbar-menu" id="open-navbar1">
          <ul className="navbar-nav">
            <li><Link to='/homepage'>Home</Link></li>
            <li className="navbar-dropdown">
              <a href="#" className="dropdown-toggler" data-dropdown="my-dropdown-id">
                Categories <i className="fa fa-angle-down"></i>
              </a>
              <ul className="dropdown" id="my-dropdown-id">
                <li><a href="#">Actions</a></li>
                <li><a href="#">Something else here</a></li>
                <li className="separator"></li>
                <li><a href="#">Separated link</a></li>
                <li className="separator"></li>
                <li><a href="#">One more separated link.</a></li>
              </ul>
            </li>
            <li className="navbar-dropdown">
             <Link to='/poster'>
                Our Works </Link> <i className="fa fa-angle-down"></i>
              <ul className="dropdown" id="blog">
                <li><a href="#">Some category</a></li>
                <li><a href="#">Some another category</a></li>
                <li className="separator"></li>
                <li><a href="#">Separated link</a></li>
                <li className="separator"></li>
                <li><a href="#">One more separated link.</a></li>
              </ul>
            </li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/register'>Sign in</Link></li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
