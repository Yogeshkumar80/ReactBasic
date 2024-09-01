import { useEffect, useState } from "react";
const HigherOrder = (title, Component, request) => {
  return function HOC() {
    const [data, setData] = useState([]);
    const getData = async () => {
      let data = await fetch(`https://jsonplaceholder.typicode.com/${request}`)
        .then((res) => {
          return res;
        })
        .catch((error) => {
          console.log("Fetch Data Error", error);
        });
      setData(await data.json());
    };

    useEffect(()=>{
      getData();
    },[]);
    return <div>
      <h1>{title}</h1>
      <Component data={data}/>

    </div>;
  };
  
};

export default HigherOrder;
