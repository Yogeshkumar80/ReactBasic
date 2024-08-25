// import React from 'react'

// import { Link }  "react-router-dom";
import { useState } from "react"
// import {Link} from "react-router-dom"
const Stats = () => {
  const [count,setcount]= useState(0) 
  const [isVisible, setisVisible] = useState(false)
  const [name, setname] = useState("")
  const increment= ()=>{
     setcount(count +1)
     setname("Nishant")
     setisVisible(!isVisible)
  }
  return (
    <div >
        <h1>{count}</h1>
        {isVisible ? <h1>Visible</h1> : <h1>Not Visible</h1> }
        <h1>{name}</h1>
        <div> <button onClick={increment}>click</button></div>
    </div>
    
  )
}

export default Stats;
