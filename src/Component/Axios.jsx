import { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
  const [name, setName] = useState(""); // Initialize with empty string
  const [data, setData] = useState([]); // Initialize with empty array
  const [error, setError] = useState(""); // For error handling

  useEffect(() => {
   getData()
  }, []);

  const postData = () => {
    axios
      .post("https://66cfe349181d059277dc8e96.mockapi.io/users", {
        name: name,
        age: 26,
        Hobbies: ["Cricket", "Reading", "Serial", "Tv"],
      })
    //   .then((res) => {
    //     setData([...data, res.data]);
    //     setName("");
    //   })
    //   .catch((err) => {
    //     setError("Failed to post data");
    //     console.log(err);
    //   });
  };

  const updateData=(id)=>{
    axios.put(`https://66cfe349181d059277dc8e96.mockapi.io/users/${id}`,{
        name: name,
        age: 28,
        Hobbies: [ "Tv"],
    })
    .then((res)=> console.log(res.data))
    .catch((err)=> console.log(err))

  }

  const deleteData=(id)=>{
    axios.delete(`https://66cfe349181d059277dc8e96.mockapi.io/users/${id}`)
  }

  const getData = () => {
    axios
    .get("https://66cfe349181d059277dc8e96.mockapi.io/users")
    .then((res) => setData(res.data))
    .catch((err) => {
      setError("Failed to fetch data");
      console.log(err);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={postData}>Post</button>
      {/* <button onClick={getData}>Get Data</button> */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{`${item.id}. ${item.name} `}</h2>
            <button onClick={()=>updateData(item.id)}>Update</button>
            <button onClick={()=>deleteData(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Axios;
