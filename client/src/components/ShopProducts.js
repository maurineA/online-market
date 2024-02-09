import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShopProducts() {
    const [products, setProducts] = useState([]);
    const { shopId } = useParams();

    useEffect(() => {
        fetch(`/products?shopId=${shopId}`)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, [shopId]); 

    console.log(products);


    return (
        <div className="container">
            <h1>Shop Products</h1>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4">
                        <div className="card mb-4">
                            <img src={product.image} className="card-img-top" alt="Product" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">Quantity: {product.quantity}</p>
                                <p className="card-text">Price: {product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopProducts;
