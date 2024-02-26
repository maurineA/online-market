import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ShopProducts() {
    const [products, setProducts] = useState([]);
    const { shopId } = useParams();

    useEffect(() => {
        fetch(`https://online-marketing.onrender.com/products?shopId=${shopId}`)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, [shopId]);

    return (
        <div className="container mt-4"style={{padding:"50px"}}>
            <h1 className="text-center mb-4">Shop Products</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map((product) => (
                    <div key={product.id} className="col">
                        <div className="card h-100">
                            <img src={product.image} className="card-img-top" alt="Product" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="card-text">Quantity: {product.quantity}</p>
                                    <p className="card-text">Price: {product.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopProducts;
