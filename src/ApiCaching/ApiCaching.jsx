import axios from 'axios'
import {useEffect, useState} from 'react'

const ApiCaching = () => {

    const [data,setData] = useState([])
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
      const fetchData = async()=>{
        let fetchs= await axios.get("https://jsonplaceholder.typicode.com/users")
        let res= await fetchs.data
         setData(res)
         setLoading(false)

      }
      fetchData()
    
     
    },[])
    if(loading) return <h2>Loading....</h2>
  return (
    <div>
      {data.map((data)=>{
        return (
          <h1 key={data.id}>{data.name}</h1>
        )
      })}
    </div>
  )
}

export default ApiCaching
