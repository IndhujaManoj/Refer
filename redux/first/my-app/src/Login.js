import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import  { login, logout } from './Features/User'
import { useSelector } from 'react-redux'
import './Login.css';
import axios from 'axios';

function Login() {
  const token=   "QpwL5tke4Pnpja7X4"

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(0)
  const user = useSelector(state => state.user.value)
  const loginUser = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email:email,
        password:password,
      
     }
      );
      // return response.data;
console.log(response)
    } catch (error) {
      throw new Error('Login failed.');
    }
  };
  

  return (
    <div>
     
      <div className="body">
      <div className="boxlogin">
        <div className="containerlogin">
          <div className="heading-container text-center">
            <h2 className="logo-text">Welcome</h2>
          </div>
          <div className="top">
            <span className="spanlogin">Have an account?</span>
            <header className="header">Login</header>
          </div>
          <div className="input-fieldlogin">
            <input
              type="text"
              className="inputlog"
              placeholder="User Id"
              value={email}
              name="userid"
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bx bx-user icons"></i>
          </div>
          <div className="input-fieldlogin">
            <input
              type="password"
              className="inputlog"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bx-lock-alt icons"></i>
          </div>
          <div className="input-fieldlogin login">
            <input
              type="submit"
              className="submitlogin"
              value="Login"
              id=""
              onClick={loginUser}
            />
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Login
