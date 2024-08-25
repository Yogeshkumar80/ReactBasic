// import React from 'react'

const Event = () => {

  const eventHandler=(event)=>{
    console.log(event.target.name)
  }

  const addSum=(num1, num2)=>{
    console.log(num1+ num2)
  }
  return (
    <div>
        <input type="text" placeholder="Input txt" name="input" onChange={eventHandler} />
      <button onClick={()=> addSum(2,2)}>Click me</button>
    </div>
  )
}

export default Event
