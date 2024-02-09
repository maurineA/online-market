import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function Shops() {
const [shops,setShops] = useState([])
useEffect(()=>{
    fetch('/shops')
    .then((r)=>r.json())
    .then(data => setShops(data))
},[])

    
   return (
        <div className="container mt-5">
            <h1 className="mb-4">Shops Available</h1>
            <div className="row">
                {shops.map((shop) => (
                    <div key={shop.id} className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">
                                    <Link to={`/shops/${shop.id}`} className="text-decoration-none">{shop.shopname}</Link>
                                </h2>
                                <h3 className="card-subtitle mb-2 text-muted">Owner: {shop.username}</h3>
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

export default Shops