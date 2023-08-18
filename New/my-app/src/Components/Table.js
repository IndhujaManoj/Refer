import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { tableUser } from '../Slice/TableSlice';
const Table = () => {
  let tab=useSelector((state)=>state.table.data)
  const data=tab

  console.log(data,"data")
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(tableUser())
  },[])
  return (
    <div className="container mt-4">
    <table className="table animated-table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope='col'>Avatar</th>

          <th scope="col">Email</th>
          <th scope="col">First Name</th>
          <th scope='col'>Last Name</th>

        </tr>
      </thead>
      <tbody>
  {data && data.map((item, index) => (
    <tr key={index}>
      <th scope="row">{item.id}</th>
      <img src={item.avatar} alt={`Avatar of ${item.firstName}`} 
                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
      />
      <td>{item.email}</td>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
     
    </tr>
  ))}
</tbody>
    </table>
  </div>
  )
}

export default Table
