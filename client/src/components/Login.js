import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Login({updateUserRole}) {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: '',
    password: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Send login data to backend
    fetch('https://online-market-28d0.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Login failed');
    })
    .then(data => {
      // If login successful, navigate to the home page
      alert(`Welcome, ${input.username}`);
      navigate('/shops');
      updateUserRole(true);
    })
    .catch(error => {
      alert('User not found');
      console.error('Error logging in:', error);
    });
  }

  return (
    <div className="container d-flex flex-column min-vh-100">
      <div className="row justify-content-center align-items-center flex-grow-1">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="login-form p-4 shadow rounded">
            <h2 className="mb-4 text-center">Login</h2>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control form-control-lg"
                placeholder="Enter your username"
                value={input.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control form-control-lg"
                placeholder="Enter your password"
                value={input.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-lg">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
