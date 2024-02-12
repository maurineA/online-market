// Logout.js
import React from 'react';
import { useNavigate } from 'react-router';

function Logout() {
  const navigate = useNavigate();

  // Function to handle logout
  function handleLogout() {
    // Send a POST request to the backend to clear the session
    fetch('/logout', {
      method: 'POST',
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Logout failed');
    })
    .then(data => {
      // If logout successful, navigate to the login page
      alert(data.message); // Display logout message
      navigate('/login'); // Redirect to login page
    })
    .catch(error => {
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
