import { useNavigate } from 'react-router-dom';
import './Home.css'; 
import React from 'react';



function Home() {
  const navigate = useNavigate()
function  handleclick(){
     navigate("newShop")



}
  return (
    <div className="home-container">
      <div className="header">
        <img src="https://images.pexels.com/photos/2622170/pexels-photo-2622170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Online Market" />
        <h1>Welcome to the Online Market</h1>
        <p>Discover the convenience of shopping online and explore a variety of shops from the comfort of your home.</p>
        <p>If you're a shop owner, join our marketplace and reach a wider audience by creating your own shop!</p>
        <button onClick={handleclick()}>sign up your shop</button>
      </div>
    </div>

  );
}

export default Home;
