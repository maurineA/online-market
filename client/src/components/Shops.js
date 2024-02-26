import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Shops() {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        fetch('https://online-marketing.onrender.com/shops')
            .then((response) => response.json())
            .then(data => setShops(data))
            .catch(error => console.error('Error fetching shops:', error));
    }, []);

    return (
        <div className="container mt-5"style={{padding:"20px"}}>
            <h3 className="mb-4 text-center">Explore Available Shops</h3>
            <SearchBar shops={shops} />
            <div className="row">
                {shops.map((shop) => (
                    <div key={shop.id} className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={`/shops/${shop.id}`} className="text-decoration-none text-dark">{shop.shopname}</Link>
                                </h5>
                                <p className="card-text">Owner: {shop.username}</p>
                                <p className="card-text">Address: {shop.address}</p>
                                <p className="card-text">Contact: {shop.contact}</p>
                                <Link to={`/shops/${shop.id}`} className="btn btn-primary">Visit Shop</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shops;
