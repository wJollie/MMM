import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Login;