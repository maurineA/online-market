// Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  function handleLogout() {
    fetch('https://soko-75ui.onrender.com/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Logout failed');
    })
    .then(data => {
      // Handle successful logout
      alert(data.message);
      // Redirect to the login page after logout
      navigate('/');
    })
    .catch(error => {
      // Handle logout failure
      alert('Logout failed');
      console.error('Error logging out:', error);
    });
  }

  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '30px' }}>
          <h1>Logout</h1>
          <p>Are you sure you want to logout?</p>
          <button onClick={handleLogout} className="btn btn-danger">Logout</button>
        </div>


      );
    }
 

export default Logout;
