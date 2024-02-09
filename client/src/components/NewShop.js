import React, { useState } from 'react';

function NewShop() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [shopName, setShopName] = useState('');
  const [contact, setContact] = useState('');

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
      });
  }

  return (
    <div className="container mt-4" style={{height:"84vh"}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Shop Name" value={shopName} onChange={(e) => setShopName(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Owner Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Add Shop</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewShop;
