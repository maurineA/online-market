import React, { useState } from 'react';

function AddProducts() {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        quantity: '',
        image: '',
        price: ''
    });


    function handleChange(e) {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch("", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        if (response.ok) {
            console.log("Product created successfully");
            setProduct({
                name: '',
                description: '',
                quantity: '',
                image: '',
                price: ''
            });
            
        } else {
            console.error("Failed to create product");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:
                <input
                    type="text"
                    name="name"
                    placeholder="Enter the Product Name"
                    value={product.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label htmlFor="description">Description:
                <input
                    type="text"
                    name="description"
                    placeholder="Describe your product here."
                    value={product.description}
                    onChange={handleChange}
                    required
                />
            </label>
            <label htmlFor="quantity">Quantity:
                <input
                    type="number"
                    name="quantity"
                    placeholder="How many do you have?"
                    value={product.quantity}
                    onChange={handleChange}
                    min={1}
                    required
                />
            </label>
            <label htmlFor="price">Price:
                <input
                    type="number"
                    name="price"
                    placeholder="What is the price of this item?"
                    value={product.price}
                    onChange={handleChange}
                    min={1}
                    required
                />
            </label>
            <label htmlFor="image">Image:
                <input
                    type="text"
                    name="image"
                    placeholder="URL to an image of the product"
                    value={product.image}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddProducts;
