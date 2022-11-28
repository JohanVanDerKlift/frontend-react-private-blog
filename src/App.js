import React, { useState } from 'react';
import './App.css';
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/Login"
import Blogposts from "./pages/blogposts/Blogposts"
import { Routes, Route } from "react-router-dom";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/blogposts" element={<Blogposts/>}/>
      </Routes>
    </>
  );
}

export default App;
