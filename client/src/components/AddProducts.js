import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProducts({ shopId }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        quantity: '',
        price: '',
        image: '',
    });
    const [error, setError] = useState('');

    useEffect(() => {
        // Check if shopId is available, if not, redirect to create a new shop
        if (!shopId) {
            navigate("/newShop");
        }
    }, [shopId, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://online-marketing.onrender.com/products?shopId=${shopId}/add-product`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    shopId: shopId
                })
            });

            if (response.ok) {
                alert("Product created successfully");
                setFormData({
                    name: '',
                    description: '',
                    quantity: '',
                    price: '',
                    image: '',
                });
            } else {
                console.error("Failed to create product");
                setError("Failed to create product");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Failed to create product");
        }
    };

    return (
        <div className="container mt-5" style={{ padding: "50px" }}>
            <h2>Add Product</h2>
            {error && <div className='alert alert-danger'>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Quantity:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        min={1}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default AddProducts;
