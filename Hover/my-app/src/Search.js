import React, { useState } from 'react'

const Search = () => {
    var email='indhu'
    var [search,setSearch]=useState('')
    function searchId(){
        if(!search){
            console.log(email)
        }else{
            console.log(search)
        }

    }
  return (
    <div>
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={searchId}>Submit</button>
    </div>
  )
}

export default Search
