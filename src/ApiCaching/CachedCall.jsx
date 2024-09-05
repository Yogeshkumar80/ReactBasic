import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useQuery} from 'react-query'
const CachedCall = () => {
    let navigate= useNavigate()
    const {data, isLoading}= useQuery("data",()=>{
        return fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
    })
    if(isLoading) return <h1>Loading...</h1>
  return (
    <div>
      <button onClick={()=>{ navigate("/api")}}>Normal</button>
      <button onClick={()=>{ navigate("/cached")}}>Cached</button>
      <h1>Cached memory</h1>
      {data.map((data)=>{
        return (
            <h1 key={data.id}>{data.name}</h1>
        )
      })}
      
    </div>
  )
}

export default CachedCall
