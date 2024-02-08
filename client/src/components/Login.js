import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './form.css'; 

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullname: '',
    email: '',
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

    const { fullname, email, password } = input;

    if (fullname.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      // If all fields are filled, navigate to the home page
      navigate('/home'); // Redirect to the home page
      alert(`Thanks ${input.fullname} for joining us`);
    } else {
      // If any field is empty, show an alert
      alert('Please enter all fields');
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="fullname">Username</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter a valid username"
            value={input.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Input your email"
            value={input.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter a valid password"
            value={input.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
