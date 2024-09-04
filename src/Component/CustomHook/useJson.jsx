import {useState, useEffect} from 'react'

const userData = () => {
    const [data,setData]= useState([])
    const [post,setPost]= useState([])

    const getUser= ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=> setData(data))
    }

    const getPost=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=> res.json())
        .then((data)=>setPost(data))
    }

    useEffect(()=>{
        getUser();
        getPost();

    },[])
  return (
    data, post
  )
}

export default userData
