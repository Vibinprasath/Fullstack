import React from 'react';
import { Link } from 'react-router-dom';
import './registerpage.css';

class RegistrationForm extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="title">
          Registration Form
        </div>
        <div className="form">
          <div className="inputfield">
            <label>First Name</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Last Name</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Password</label>
            <input type="password" className="input" />
          </div>
          <div className="inputfield">
            <label>Confirm Password</label>
            <input type="password" className="input" />
          </div>
         
          <div className="inputfield">
            <label>Phone Number</label>
            <input type="text" className="input" />
          </div>
        
          <div className="inputfield terms">
            <label className="check">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <p>Agreed to terms and conditions</p>
          </div>
          <div className="inputfield">
          <Link to='/homepage'><input type="submit" value="Register" className="btn" /></Link>
          </div>
          <div className='ln'>
          <Link to='/'>Login</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
