// import React from 'react'

import { useState } from "react";

const Dynamic = () => {
 const [input, setInput] = useState({})
 const getInputValue= (data)=>{
    let { name, value} = data.target;
    let input = {[name]: value};
    setInput({...input ,...input})
 }
 console.log(input)
  return (
  <div>
    <input type="text" placeholder='Inter name' name="name" onChange={getInputValue} />
    <input type="age" placeholder='Enter Age' name="Age" onChange={getInputValue} />
    
  </div>
  )
}

export default Dynamic
