import React from 'react';
import "./Blogposts.css"
import posts from '../../data/posts.json'

function Blogposts(props) {
  console.log(posts);

  return (
    <>
      <h1>Blogposts</h1>

      <ul className="blogposts">
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Blogposts;