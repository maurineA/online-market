import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewShop({ setShopId }) {
  const [user_id, setUserid] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [shopname, setShopName] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // const shopData = {
  //   username,
  //         address,
  //         shopname: shopName,
  //         contact
  // }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("https://online-marketing.onrender.com/addshop", {
        method: "POST",
        credentials: "include",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id,
          username,
          address,
          shopname,
          contact
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add shop');
      }

      const data = await response.json();
      setShopId(data.id);
      navigate(`/shops`);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="container mt-4" style={{ padding: "50px" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px' }}>
            <h2 className="text-center mb-4">Add a New Shop</h2>
            {error && <div className='alert alert-danger'>{error}</div>}
            <div className="mb-3">
              <label htmlFor="userId" className="form-label">User ID</label>
              <input type="text" className="form-control" id="userId" placeholder="Enter user ID" value={user_id} onChange={(e) => setUserid(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="shopName" className="form-label">Shop Name</label>
              <input type="text" className="form-control" id="shopname" placeholder="Enter Shop Name" value={shopname} onChange={(e) => setShopName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="ownerName" className="form-label">Owner Name</label>
              <input type="text" className="form-control" id="username" placeholder="Enter Owner Name" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="contact" className="form-label">Contact</label>
              <input type="text" className="form-control" id="contact" placeholder="Enter Contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Add Shop</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewShop;
