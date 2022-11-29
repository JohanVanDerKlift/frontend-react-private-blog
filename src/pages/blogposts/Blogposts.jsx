import React from 'react';
import "./Blogposts.css"
import posts from '../../data/posts.json'
import {Link} from "react-router-dom";

function Blogposts(props) {
  console.log(posts);

  return (
    <>
      <h1>Blogposts</h1>

      <ul className="blogposts">
        {posts.map((post) => (
          <li key={post.id}><Link to={"/blog/" + post.id}>{post.title}</Link></li>
        ))}
      </ul>
    </>
  );
}

export default Blogposts;