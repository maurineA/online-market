import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function handleSignUp() {
    navigate("/signup");
  }

  function handleLogin() {
    navigate("/login");
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-0">
          <img
            src="https://images.pexels.com/photos/2622170/pexels-photo-2622170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Online Market"
            className="img-fluid rounded"
            style={{ maxHeight: '100%', width: '100%' }}
          />
        </div>
        <div className="col-md-6 d-flex align-items-center bg-light">
          <div className="p-5">
            <h1 className="display-4 mb-4 text-primary">Welcome to the Online Market</h1>
            <p className="lead mb-4">Discover the convenience of shopping online and explore a variety of shops from the comfort of your home.</p>
            <p className="mb-4">If you're a shop owner, join our marketplace and reach a wider audience by creating your own shop!</p>
            <div className="d-flex justify-content-between">
              <button onClick={handleSignUp} className="btn btn-primary btn-lg px-4">Sign Up</button>
              <button onClick={handleLogin} className="btn btn-outline-primary btn-lg px-4">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
 