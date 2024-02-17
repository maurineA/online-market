// Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Signup({ updateUserRole }) { // Destructure updateUserRole from props
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullname: '',
    email: '',
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

    // Send signup data to backend
    fetch('https://soko-75ui.onrender.com/signup', {
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
      throw new Error('Signup failed');
    })
    .then(data => {
      // If signup successful, navigate to the home page
      alert(`Thanks ${input.fullname} for joining us`);
      updateUserRole(data.isShopOwner);                   
      navigate('/login');
    })
    .catch(error => {
      alert('Signup failed');
      console.error('Error signing up:', error);
    });
  }

  return (
    <div className="container d-flex flex-column min-vh-100">
      <div className="row justify-content-center align-items-center flex-grow-1">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="signup-form p-4 shadow rounded">
            <h2 className="mb-4 text-center">Sign Up</h2>
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="form-control form-control-lg"
                placeholder="Enter your full name"
                value={input.fullname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Input your email"
                value={input.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control form-control-lg"
                placeholder="Enter a username"
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
                placeholder="Enter a password"
                value={input.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
