import { useContext } from 'react'
import {UserData} from "./GlobalContest"
const Name = () => {
  let {name} = useContext(UserData)
  return ( 
    <div>

     <h1>{name}</h1>
    </div>
  )
}

export default Name
