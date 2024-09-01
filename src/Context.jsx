import  { useState } from 'react'
import Name from './Component/ContestApi/Name'
import Profile from './Component/ContestApi/Profile'
import {UserData} from "./Component/ContestApi/GlobalContest"
import Setting from './Component/ContestApi/Setting'
const Context = () => {
  const [name, setName] = useState("Nishant")
  const [age, setAge] = useState(25)
  
  return (
    <div>
        <UserData.Provider value={{name, setName, age,setAge}}>
            <Name/>
            <Profile/>
            <Setting/>
        </UserData.Provider>
        
      
    </div>
  )
}

export default Context
