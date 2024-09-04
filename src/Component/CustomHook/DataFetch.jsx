// // import React from 'react'
// import JsonPlaceHolder from './JsonPlaceHolder'
// const DataFetch = () => {
//   let [user, post] = JsonPlaceHolder()
//   return (
//     <div>
//       {user.map((user)=>{
//        return  <h4 key={user.id}>{user.name}</h4>
// })}
//       <br />
//       {post.map((post)=>(
//         <h4 key={post.id}>{post.title}</h4>
//       ))}
//     </div>
//   )
// }

// export default DataFetch


import React from 'react';
import userData from './useJson';

const DataFetch = () => {
  const [user, post] = uesrData(); // Call the hook inside the component body

  return (
    <div>
      {user && user.map((user) => (
        <h4 key={user.id}>{user.name}</h4>
      ))}
      <br />
      {post && post.map((post) => (
        <h4 key={post.id}>{post.title}</h4>
      ))}
    </div>
  );
};

export default DataFetch;
