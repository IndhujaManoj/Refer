import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../Slice/loginSlice'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  function handleSubmit() {
    dispatch(loginUser(email, password))
    console.log(email)
  }
  return (
    <div className='containers'>
      <div className='flexs1'>
        <div
         >
          <a 
          >

            <img alt='logo' 
            className='max-h-70px' 
            src='https://preview.keenthemes.com/metronic/react/demo1/media/logos/logo-letter-1.png' />
          </a>
        </div>
        <div className='texts'>
         
          <h2 class="welcome "
          >Welcome to metronic!</h2>
        </div>
          <div style={{color:'white'}}>The ultimate Bootstrap & React 16 admin theme framework for next generation </div>
          <div className='text3' style={{marginLeft:'10px',color:'white'}} > web apps</div>
        <div className='footer'>
          <div className='metronic'>© 2020 Metronic</div>
          <div className='content'>Privacy  </div>
          <div className='content'>Legal</div>
          <div className='content'>Contact</div>
        </div>
      </div>
      <div className='flexs2'>
        <div className='account'>
          <div className='signup'><span>Don't have an account yet?</span><span style={{ color: 'skyblue' }}>Sign Up!</span></div>
          <div className='loginpg' >
            <h3 className='content1'>Login Account</h3>
            <h5 className='content1' style={{color:'rgb(186,207,236)' ,fontSize:'10px'}}>Enter your Username and password</h5>
          
            <div class="logs">
              <div class="card">
                <div class="continue1" style={{ color: 'rgb(176,92,252)' }}>
                  Use account admin@demo.com and password demo to <br />
                  continue.
                </div>
              </div>

              <div class="card">
                <div class="continue1 space">
                  <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    class="inputs"
                  />
                </div>
              </div>

              <div class="card">
                <div class="continue1 space">
                  <input
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}

                    class="inputs"
                  />
                </div>
              </div>

              <div className='card' style={{display:'flex',justifyContent:'space-between'}}>
                <div class="button">
                  <div class="continue1" style={{display:'flex',justifyContent:'space-around'}}>
                    <span style={{paddingTop:'7px'}}>Forget password</span>
                    <button onClick={handleSubmit}>Submit</button>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>

  )
}

export default Login
