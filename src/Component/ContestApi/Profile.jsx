import { useContext } from "react"
import {UserData} from "./GlobalContest"

const Profile = () => {
  let {setName} = useContext(UserData)
  return (
    <div>

      <button type="text" placeholder='Enter the name' onClick={()=>setName("Uday") }> Change the value </button>
    </div>
  )
}

export default Profile
