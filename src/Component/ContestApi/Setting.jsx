import  { useContext, useState } from 'react';
import { UserData } from './GlobalContest';

const Setting = () => {
  const {age, setAge } = useContext(UserData);

  const [aged, setLocalAge] = useState('');



  return (
    <div>
      <input
        type="number"
        placeholder="Enter Your Age"
        value={aged}
        onChange={(event)=>{setLocalAge(event.target.value)}}
      />
      <button onClick={()=>{setAge(aged)}}>Set Age</button>
      <h1>{age}</h1>
    </div>
  );
};

export default Setting;
