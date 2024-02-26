import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchBar({ shops }) {
  const [input, setInput] = useState('');
  const [filteredShops, setFilteredShops] = useState([]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    const searchTerm = input.toLowerCase();
    if (searchTerm.trim() === '') {
      setFilteredShops([]);
    } else {
      const shopsFiltered = shops.filter((shop) =>
        shop.shopname.toLowerCase().includes(searchTerm)
      );
      if (shopsFiltered.length === 0) {
        alert('Sorry, that shop is not found');
      }
      setFilteredShops(shopsFiltered);
    }
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSearch} className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search ..."
              value={input}
              onChange={handleChange}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit" style={{ marginLeft: '5px' }}>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-4">
        {filteredShops.map((shop) => (
          <div key={shop.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/shops/${shop.id}`} className="text-decoration-none">{shop.shopname}</Link>
                </h5>
                <p className="card-text">Owner: {shop.username}</p>
                <p className="card-text">Address: {shop.address}</p>
                <p className="card-text">Phone Number: {shop.contact}</p>
                <Link to={`/shops/${shop.id}`} className="btn btn-primary">Visit Shop</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
