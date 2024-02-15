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
             
              <Link to='/decide'>Decide</Link> 
             
              <ul className="dropdown" id="my-dropdown-id">
                <li>Actions</li>
                <li>Something else here</li>
                <li className="separator"></li>
                <li>Separated link</li>
                <li className="separator"></li>
                <li> One more separated link. </li>
              </ul>
            </li>
            <li className="navbar-dropdown">
             <Link to='/poster'> Pending Galas </Link> <i className="fa fa-angle-down"></i>
              <ul className="dropdown" id="blog">
                <li> Some category </li>
                <li> Some another category </li>
                <li className="separator"></li>
                <li> Separated link</li>
                <li className="separator"></li>
                <li>One more separated link.</li>
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
