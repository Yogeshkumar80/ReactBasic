import React, { useEffect } from 'react'
import {Helper} from './Helper'
const HelperFile = () => {

  let getUser= async ()=>{
    let data= await Helper(`posts`);
    console.log(data)
  }
  useEffect(()=>{
    getUser();
  },[])
  return (
    <div>

      
    </div>
  )
}

export default HelperFile;
