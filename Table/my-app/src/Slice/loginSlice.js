import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    token:null,
    error:null,
    user:null
}
const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        loginSuccessfull:(state,action)=>{
            state.token=action.payload
            state.user=action.payload
            console.log(action.payload)
            localStorage.setItem('token',action.payload)
        },
        loginFail:(state,action)=>{
            state.error=action.payload
        }
        
    }
})


export const loginUser=(email,password)=>async (dispatch)=>{
try{
    const response=await axios.post('https://reqres.in/api/login',{email,password})

    const user=response.data.token
    

    dispatch(loginSuccessfull(user))
    alert('login Successfull',user)
  
    
}catch(error){
dispatch(loginFail(error.response.data.error))
alert(error.response.data.error)
}
}

export const {loginFail,loginSuccessfull}=loginSlice.actions;
export default loginSlice.reducer;   