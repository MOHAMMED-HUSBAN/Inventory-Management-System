// src/components/ProductForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    quantity: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.error('Error fetching product:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:5000/api/products/${id}`, product)
        .then(() => navigate('/'))
        .catch(error => console.error('Error updating product:', error));
    } else {
      axios.post('http://localhost:5000/api/products', product)
        .then(() => navigate('/'))
        .catch(error => console.error('Error creating product:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{id ? 'Edit Product' : 'Add New Product'}</h1>
      <label>
        Name:
        <input type="text" name="name" value={product.name} onChange={handleChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={product.category} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={product.price} onChange={handleChange} />
      </label>
      <label>
        Quantity:
        <input type="number" name="quantity" value={product.quantity} onChange={handleChange} />
      </label>
      <button type="submit">{id ? 'Update Product' : 'Add Product'}</button>
    </form>
  );
};

export default ProductForm;
