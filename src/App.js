import React, { useState } from 'react';
import './App.css';
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/Login"
import Blogposts from "./pages/blogposts/Blogposts"
import {Routes, Route, Navigate} from "react-router-dom";
import Blog from "./pages/blog/Blog";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  function handleAuthentication() {
    toggleIsAuthenticated(!isAuthenticated);
    console.log(isAuthenticated);
  }

  return (
    <>
      <Navigation isAuthenticated={isAuthenticated} toggleIsAuthenticated={handleAuthentication}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login toggleIsAuthenticated={handleAuthentication}/>}/>
        <Route path="/blogposts" element={isAuthenticated ? <Blogposts/> : <Navigate to="/login"/>}/>
        <Route path="/blog/:id" element={isAuthenticated ? <Blog/> : <Navigate to="/login"/>}/>
      </Routes>
    </>
  );
}

export default App;
