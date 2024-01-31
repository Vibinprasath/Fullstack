import React from 'react';
import { Link } from 'react-router-dom';
import "./loginpage.css";

class LoginForm extends React.Component {
  render() {
    return (
      <form className="login">
        <h2>Welcome, User!</h2>
        <p>Please log in</p>
        <input type="text" placeholder="User Name" />
        <input type="password" placeholder="Password" />
       <Link to='/homepage'><input type="submit" value="Log In" className="btn" /></Link>
        <div className="links">
          <a href="#">Forgot password</a>
          <Link to='/register'>Register</Link>
        </div>
      </form>
    );
  }
}

export default LoginForm;
