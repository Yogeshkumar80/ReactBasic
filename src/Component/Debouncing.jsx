// import React from 'react'
import axios from "axios"

import { useEffect,useState } from "react";
const Debouncing = () => {
    const [pin, setPin] = useState()
    // const pinAPI= `https://api.postalpincode.in/pincode/`;
    
    useEffect(()=>{
        const debouncing= setTimeout(()=>{
            axios.get(`https://api.postalpincode.in/pincode/` + pin)
            .then((res)=> console.log(res.data[0].Postoffice))
            .catch((err) => console.log(err))
        },2000)

        return ()=>{
            clearTimeout(debouncing)
        }
       
    },[pin])
    return (
    
    <div>
        <input type="text" onChange={(event)=>setPin(event.target.value)} placeholder='Enter Your pin Code' />
      
    </div>
  )
}

export default Debouncing
