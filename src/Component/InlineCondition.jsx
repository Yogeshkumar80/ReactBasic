import React, {useEffect} from 'react'

const InlineCondition = () => {
  let age=26;
  let name="Nishant";
  useEffect(()=>{
    age> 26 ? (
        console.log("I'm 26 year old")
    ): age===26 && name==="Nishant" ? (
        <>
         {console.log("My name is Nishant")}
         {console.log("I'm 26 year old")}
        </>
    ):(
      console.log("Hello")
    );

  },[])
  return (
    <div>
      
    </div>
  )
}

export default InlineCondition
