import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  function handleSignUp() {
    navigate("/signup");
  }

  function handleLogin() {
    navigate("/login");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://images.pexels.com/photos/2622170/pexels-photo-2622170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Online Market"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <div className="header">
            <h1>Welcome to the Online Market</h1>
            <p>Discover the convenience of shopping online and explore a variety of shops from the comfort of your home.</p>
            <p>If you're a shop owner, join our marketplace and reach a wider audience by creating your own shop!</p>
            <button onClick={handleSignUp} className="btn btn-primary">Sign Up</button>
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
