import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Shops() {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        fetch('https://online-market-28d0.onrender.com/shops')
            .then((response) => response.json())
            .then(data => setShops(data))
            .catch(error => console.error('Error fetching shops:', error));
    }, []);
    console.log(shops)

    return (
        <div className="container mt-5"style={{padding:"20px"}}>
            <h3 className="mb-4 text-center">Shops Available</h3>
            <SearchBar shops={shops} />
            <div className="row">
                {shops.map((shop) => (
                    <div key={shop.id} className="col-md-12 mb-4">
                        <div className="card bg-light">
                            <div className="card-body">
                                <h2 className="card-title">
                                    <Link to={`/shops/${shop.id}`} className="text-decoration-none">{shop.shopname}</Link>
                                </h2>
                                <p className="card-subtitle mb-2 text-muted">Owner: {shop.username}</p>
                                <p className="card-text">Physical Address: {shop.address}</p>
                                <p className="card-text">Contact: {shop.contact}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shops;
