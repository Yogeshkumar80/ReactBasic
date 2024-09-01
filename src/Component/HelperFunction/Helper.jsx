import React from 'react'

export const  Helper= (title)=> {
  return (
    fetch(`https://jsonplaceholder.typicode.com/${title}`)
    .then((res)=>res.json()
)
  )
}
