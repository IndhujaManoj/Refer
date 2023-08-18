import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    data:null,
    error:null
}
const TableSlice=createSlice(({
    name:'table',
    initialState,
    reducers:{
        TableSuccess:(state,action)=>{
            state.data=action.payload
        },
        TableError:(state,action)=>{
            state.error=action.payload
        }
    }
}))
export const tableUser=()=>async(dispatch)=>{
    try{
const response=await axios.get('https://reqres.in/api/users?page=2')
console.log(response.data.data) 
dispatch(TableSuccess(response.data.data))
    }catch(error){
dispatch(TableError(error))
    }
}
export const {TableSuccess,TableError}=TableSlice.actions
export default TableSlice.reducer
