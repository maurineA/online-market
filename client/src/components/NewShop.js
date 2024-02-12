import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewShop({ updateUserRole ,setShopId}) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [shopName, setShopName] = useState('');
  const [contact, setContact] = useState('');
  const [error ,setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newShop = {
      username: name,
      address: address,
      shopname: shopName,
      contact: contact
    };
  
    fetch("/addshop", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newShop)
    })
    .then(r => {
      if (!r.ok) {
        throw new Error("Failed to add shop");
      }
      return r.json();
    })
    .then(data => {
      alert("Shop created successfully");
      updateUserRole(true);
      setShopId(data.id); 
      navigate(`/shop/${data.shopId}`);
  
      // Adding a product after shop creation
      const newProduct = {
        name: 'Sample Product',
        description: 'Sample Description',
        quantity: 10,
        price: 50.00,
        image: 'sample_image.jpg'
      };
  
      // Send an array of products
      return fetch("/add-product", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ products: [newProduct] })
      });
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to add product");
      }
      return response.json();
    })
    .catch(error => {
      setError(error.message);
    });
  }
  

  return (
    <>
    <div className="container mt-4" style={{ padding: "50px" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px' }}>
            <h2 className="text-center mb-4">Add a New Shop</h2>
            {error && <div className='alert alert-danger'>{error}</div>}
            <div className="mb-3">
              <label htmlFor="shopName" className="form-label">Shop Name</label>
              <input type="text" className="form-control" id="shopName" placeholder="Enter Shop Name" value={shopName} onChange={(e) => setShopName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="ownerName" className="form-label">Owner Name</label>
              <input type="text" className="form-control" id="ownerName" placeholder="Enter Owner Name" value={name} onChange={(e) => setName(e.target.value)} required />
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
    </>
  );
}

export default NewShop;
