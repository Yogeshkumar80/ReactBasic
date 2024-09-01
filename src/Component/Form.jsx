import { useState } from "react";

const Form = () => {
  const [objData, setobjData] = useState({});
  const getInput = (name, value) => {
    const data = { [name]: value };
    setobjData((prevData)=>({ ...prevData,...data}));
  };

  const onSubmit=(event)=>{
    event.preventDefault();
    console.log(objData)
  }

  return (
    <form onSubmit={onSubmit} >
    <div>
      <input
        type="text"
        placeholder="write your name"
        name="name"
        onChange={(event) => getInput(event.target.name, event.target.value)}
      />
      <input
        type="number"
        placeholder="write your age"
        name="age"
        onChange={(event) => getInput(event.target.value, event.target.name)}
      />
      <input
        type="text"
        placeholder="write your hobbies"
        name="hobbies"
        onChange={(event) => getInput(event.target.value, event.target.name)}
      />
      <input
        type="date"
        placeholder="Enter Date"
        name="Date"
        onChange={(event) => getInput(event.target.value, event.target.name)}
      />
      {/* <input type="file"  /> */}

      <button type="submit">Click Here</button>
      <button type="reset">Reset</button>
    </div>
    </form>
  );
};

export default Form;
