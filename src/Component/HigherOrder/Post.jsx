// import React from 'react'
// import { useEffect, useState } from "react";
import HigherOrder from "./HigherOrder";
const Post = ({data}) => {

  return (
    <div style={{textAlign:"center"}}>
      <br />
      {data.slice(0,10).map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
};

const PostComp= HigherOrder("Post", Post, "posts" );

export default PostComp;
