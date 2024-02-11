import React, { useState } from 'react';
import { useNavigate } from 'react-router';

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
      navigate('/home'); 
      alert(`Thanks ${input.fullname} for joining us`);
    } else {
      alert('Please enter all fields');
    }
  }

  return (
    <div className="container d-flex flex-column min-vh-100">
      <div className="row justify-content-center align-items-center flex-grow-1">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="login-form p-4 shadow rounded">
            <h2 className="mb-4 text-center">Login</h2>
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">Username</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="form-control form-control-lg"
                placeholder="Enter a valid username"
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
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control form-control-lg"
                placeholder="Enter a valid password"
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
