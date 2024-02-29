import React, { useState } from 'react';
import axios from 'axios';
const Post = function () {
    const [posts, setPosts] = useState([]);
    const loadPost = function()
    {
      axios
      .get(
          `https://jsonplaceholder.typicode.com/posts`
      )
      .then((response) => {
          const posts = response.data;
          setPosts( posts );
      });
    };

    return <div>Post
<div>
        <h2>Post List</h2>
        <div class="row">
          <div>Id</div>
          <div>Title</div>
        </div>
        {posts.map((item,index) => {
          return (
            <div class="row" key  = {index}>
              <div>{item.id}</div>
              <div>{item.title}</div>
             
            </div>
          );
        })}
      </div>
    </div>
};
export default Post;