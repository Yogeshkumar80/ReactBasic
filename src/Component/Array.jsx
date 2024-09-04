import React,{useEffect} from 'react'

const Array = () => {

 const fnArray= [
    function fn(a,b){
        return(a+b)
    },
    function fn(a,b){
        return(a-b)
    },
    function fn(a,b){
        return(a*b)
    },
    function fn(a,b){
        return(a/b)
    },
]

  const mainfn= ()=>{
    let result = fnArray.map((fn)=>{
        return fn(2,4);
    })  
    console.log(result)
  }
  useEffect(()=>{
    mainfn()
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Array
