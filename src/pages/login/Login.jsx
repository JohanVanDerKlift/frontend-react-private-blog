import React from 'react';
import './Login.css'

function Login({ toggleIsAuthenticated }) {
  return (
    <div className="container">
      <button type="button" onClick={toggleIsAuthenticated}>Inloggen</button>
    </div>
  );
}

export default Login;