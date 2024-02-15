import React from 'react';
import { Link } from 'react-router-dom';
import "./loginpage.css";

class LoginForm extends React.Component {
  render() {
    return (
      <form className="login">
        <h1 style={{textAlign:'center'}}>Welcome </h1>
        
       <input type="text" placeholder="Email Id" />
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




// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';
// import "./loginpage.css";
// import { signIn } from './services/auth';

// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [usernameValid, setUsernameValid] = useState(true);
//   const [passwordValid, setPasswordValid] = useState(true);

//   const history = useHistory();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "username") {
//       setUsername(value);
//       setUsernameValid(true);
//     } else if (name === "password") {
//       setPassword(value);
//       setPasswordValid(true);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform validation
//     if (username.trim() === "") {
//       setUsernameValid(false);
//       return;
//     }

//     if (password.trim() === "") {
//       setPasswordValid(false);
//       return;
//     }

//     // Create an object with the form data
//     const formData = {
//       username,
//       password,
//     };

//     signIn(formData)
//       .then((res) => {
//         localStorage.setItem('token', res.data.token);
//         console.log(res.data.token);
//         const decoded = jwtDecode(res.data.token);
//         console.log(decoded.sub);
//         sessionStorage.setItem('token', res.data.token);
//         if (decoded.sub === "admin@gmail.com") {
//           // Redirect to the appropriate page for admin
//           history.push('/dash');
//         } else {
//           // Redirect to the home page for non-admin users
//           history.push('/home');
//         }
//       })
//       .catch((err) => {
//         // Handle authentication errors
//         console.log(err);
//         // Clear username and password fields if needed
//         setUsername("");
//         setPassword("");
//       });
//   };

//   return (
//     <form className="login" onSubmit={handleSubmit}>
//       <h1 style={{ textAlign: 'center' }}>Welcome</h1>

//       <input
//         type="text"
//         name="username"
//         placeholder="User Name"
//         value={username}
//         onChange={handleInputChange}
//         className={usernameValid ? "" : "error"}
//       />
//       {!usernameValid && <p className="error-text">Username is required</p>}
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={password}
//         onChange={handleInputChange}
//         className={passwordValid ? "" : "error"}
//       />
//       {!passwordValid && <p className="error-text">Password is required</p>}
//       <input type="submit" value="Log In" className="btn"/>  
//       <div className="links">
//         <a href="#">Forgot password</a>
//         <Link to='/register'>Register</Link>
//       </div>
//     </form>
//   );
// };

// export default LoginForm;






// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {singin} from './services/auth';
// import axios from 'axios';

// import { jwtDecode } from 'jwt-decode';
// const Login = () => {
//     const [credentials, setCredentials] = useState({
//         email: '',
//         password: '',
//     });
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCredentials({ ...credentials, [name]: value });
//     };
    
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const form = {
//             email: credentials.email,
//             password: credentials.password
//         };
//         signIn(form)
//     .then((res) => {
//         localStorage.setItem('token', res.data.token);
//         console.log(res.data.token);
//         const decoded = jwtDecode(res.data.token);
//         console.log(decoded.sub);
//         sessionStorage.setItem('token', res.data.token);
//         if (decoded.sub === "admin@gmail.com") {
//             // Redirect to the appropriate page for admin
//             navigate('/dash');
//         } else {
//             // Redirect to the home page for non-admin users
//             navigate('/home');
//         }
//     })
//     .catch((err) => {
//         // Handle authentication errors
//         console.log(err);
//         // Clear email and password fields if needed
//         setEmail("");
//         setPassword("");
//     });

        
//     };

//     return (
//         <div style={{ backgroundImage: 'url("")', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <div className="row justify-content-center align-items-center h-100">
//                 <div className="col-md-6">
//                     <div style={{ maxWidth: '400px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', animation: 'fadeIn 1s ease', padding: '20px', borderRadius: '5px' }}>
//                         <div style={{ borderRadius: '10px', padding: '20px' }}>
//                             <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' ,textAlign:'center',color:'black'}}>Login</h2>
//                             <form onSubmit={handleSubmit} className="auth-form">
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     placeholder="Email Address"
//                                     value={credentials.email}
//                                     onChange={handleChange}
//                                     style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }}
//                                     required
//                                 />
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     placeholder="Password"
//                                     value={credentials.password}
//                                     onChange={handleChange}
//                                     style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }}
//                                     required
//                                 />
//                                 <button type="submit" style={{ marginTop: '15px', padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', width: '100%' }}>Login</button>
//                             </form>
//                             <p style={{ marginTop: '15px' }}>
//                                 Don't have an account? <NavLink to="/signup" style={{ color: '#007bff', textDecoration: 'none',textAlign:'center' }}>Sign Up</NavLink>
                                
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;