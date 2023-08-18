import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    token:null,
    error:null,
}
const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        loginSuccessfull:(state,action)=>{
            state.token=action.payload
        },
        loginFail:(state,action)=>{
            state.error=action.payload
            
        }
    }
})

export const loginUser=(email,password)=>async (dispatch)=>{
    try{
        const response=await axios.post('https://reqres.in/api/login',{email,password})
const token=response.data.token

dispatch(loginSuccessfull(token))
if(response.data.token){
    alert('Login Successfully')
}

    }catch(error){
dispatch(loginFail(error))
if(error){
    alert(error.response.data.error)
}
    }
}

export const {loginFail,loginSuccessfull}=loginSlice.actions
export default loginSlice.reducer