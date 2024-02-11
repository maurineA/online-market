import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function AddProducts() {
    const { shopId } = useParams();
    const initialState = {
        name: '',
        description: '',
        quantity: '',
        image: '',
        price: '',
        shopId: shopId
    };

    const [product, setProduct] = useState(initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch("/add-product", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            });

            if (response.ok) {
                console.log("Product created successfully");
                setProduct(initialState);
            } else {
                console.error("Failed to create product");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="container"style={{padding:"100px"}}>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter the Product Name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Describe your product here."
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Quantity:</label>
                    <input
                        type="number"
                        name="quantity"
                        className="form-control"
                        placeholder="How many do you have?"
                        value={product.quantity}
                        onChange={handleChange}
                        min={1}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price:</label>
                    <input
                        type="number"
                        name="price"
                        className="form-control"
                        placeholder="What is the price of this item?"
                        value={product.price}
                        onChange={handleChange}
                        min={1}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image:</label>
                    <input
                        type="text"
                        name="image"
                        className="form-control"
                        placeholder="URL to an image of the product"
                        value={product.image}
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
