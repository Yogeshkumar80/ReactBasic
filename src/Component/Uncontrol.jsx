import React from 'react'

const Uncontrol = () => {
  // let name= React.createRef();
  // let age= React.createRef();

  // const submit =()=>{
  //   console.log(name.current.value);
  //   console.log(age.current.value)

  
 const getInput=(event)=>{
  return console.log(event.target.value)
 }
  
  return (
    <div>
      {/* UnControl */}
      {/* <input type="text" placeholder="Enter Your Name" ref={name} />   
      <input type="number" placeholder="age" ref={age} />
      <button onClick={submit}>Submit</button> */}

      {/* Control */}
      <input type="text" placeholder='Enter Your Name'  onChange={getInput}/>
    </div>
  )
}

export default Uncontrol
