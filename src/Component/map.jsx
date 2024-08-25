import { useState, useEffect } from "react";
import "./App.css";
function Map() {
  const [user, setuser] = useState([]);

  useEffect(()=>
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((json)=> setuser(json))
  },[]);

  const mapped= ()=>{
    let filtered= user.filter((users)=>{
      return users.id>=10;
    })
    setuser(filtered)
  }
  
   
  return (
    <div className="App">
      <h1>Users</h1>
      <div>
        {user.map((users, id)=>(
          <div key={id}>
             <h1>{users.name}</h1>
             <h1>{users.username}</h1>
           </div>

        ))}
      </div>
      <button onClick={mapped}>Click here</button>
    </div>
  );
}

export default Map;
