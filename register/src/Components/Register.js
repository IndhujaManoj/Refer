import React, { useState } from 'react'

export const Register = () => {
    const [register, setRegister] = useState({
        userName: "",
        password: "",
    })
    const handleClick = () => {
        console.log(register)
        if(register.userName&&register.password){
                const local=JSON.parse(localStorage.getItem("userData"))||[];
                local.push(register);
                localStorage.setItem("userData",JSON.stringify(local))
                setRegister({
                    userName: "",
                    password: "",
                })
        }else{
            alert("please enter username and password")
        }
    }
  return (
    <div>
        <label>UserName</label>
        <input type="text" value={register.userName} onChange={(e) => setRegister({...register, userName: e.target.value})}/>
        <label>Password</label>
        <input type="password" value={register.password} onChange={(e) => setRegister({...register, password: e.target.value})}/>
        <button onClick={handleClick}>Register</button>
    </div>
  )
}
