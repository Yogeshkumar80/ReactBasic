import React from 'react'
const Split = () => {
   const add = ()=>{
    import("./Promise.jsx")
    .then((promiseComp)=>{
        let promiseCom= promiseComp()
        console.log(promiseCom)
    })
   }
  return (
    <div>
      <button onClick={add}>Add</button>
    </div>
  )
}

export default Split
