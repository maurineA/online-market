import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  function handleclick() {
    navigate("/newShop");
  }

  return (
    <div className="container" style={{padding:"68.45px"}} >
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://images.pexels.com/photos/2622170/pexels-photo-2622170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Online Market"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <div className="header" style={{padding:"20px"}}>
            <h1>Welcome to the Online Market</h1>
            <p>Discover the convenience of shopping online and explore a variety of shops from the comfort of your home.</p>
            <p>If you're a shop owner, join our marketplace and reach a wider audience by creating your own shop!</p>
            <button onClick={handleclick} className="btn btn-primary">Sign Up Your Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
