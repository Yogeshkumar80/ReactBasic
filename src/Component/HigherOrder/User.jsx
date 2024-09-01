// import { useEffect, useState } from "react";

import HigherOrder from "./HigherOrder";

const User = ({data}) => {
  return (
    <div style={{textAlign:"center"}}>
      <br/>
      {data.map((user) => {
        return <p key={user.id}>{user.name}</p>
      })}
    </div>
  );
};

const UserComp= HigherOrder("User", User, "users")
export default UserComp;