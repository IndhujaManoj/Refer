import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../Slice/login'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const navi = useNavigate()
  const dispatch = useDispatch()
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(loginUser(email, Password))
  }
  const login = useSelector((state) => state.login);
  const isLoggedIn = login.user !== null;
  useEffect(() => {
    if (isLoggedIn) {
      navi('/table')
    }
  }, [isLoggedIn]);
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input type='text' value={Password} onChange={(e) => setPassword(e.target.value)} />
      <button>Submit</button>
    </form>
  )
}

export default Login
