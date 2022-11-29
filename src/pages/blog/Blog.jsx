import React from 'react';
import './Blog.css'
import posts from '../../data/posts.json'
import { useParams } from "react-router-dom";

function Blog(props) {
  const id = useParams();
  console.log(id)

  const postFound = posts.find((post) => {
    return post.id === id.id;
  })

  return (
    <article className="article">
      <h2>{postFound.title}</h2>
      <h3>{postFound.date}</h3>
      <p>{postFound.content}</p>
    </article>
  );
}

export default Blog;