import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Table = () => {
    const [data,setData]=useState('')
    console.log(data,"data")
    const viewDetails = async () => {
        try {
          const response = await axios.get('https://reqres.in/api/users?page=2', 
           
           
          );
          setData(response.data.data);
        } catch (error) {
          console.error('Error retrieving pin request:', error);
        }
      };
  


  useEffect(() => {
    viewDetails();
  }, []);
  return (
      <table border={1}>
        <thead>
            <tr>
            <th>S.no</th>

                <th>ID</th>
                <th>Email</th>
                <th>FirstName</th>
                <th>Last Name</th>
                <th>Avatar</th>

            </tr>
            </thead>

            <tbody>
            {data && data.map((item, index) => (

<tr key={index + 1}>
  <td className='text-center'> 
    <h3 className='text-lg'>{index + index}</h3>
  </td>
  <td className='text-center'> 
    <h3 className='text-lg'>{item.id}</h3>
  </td>
  <td className='text-center'>
    <h3 className='text-lg'>{item.email}</h3>
  </td>
  <td className='text-center'>
    <h3 className='text-lg'>{item.first_name}</h3>
  </td>
  <td className='text-center'>
    <h3 className='text-lg'>{item.last_name}</h3>
  </td >
  <td className='text-center'>
    <h3 className='text-lg'>{item.avatar}</h3>
  </td>
 



</tr>))}

            </tbody>
      </table>
  )
}

export default Table
