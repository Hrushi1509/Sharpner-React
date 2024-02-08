import React, { useState } from 'react';

const Inputs = () => {
  const [product, setProduct] = useState({
    productId: '',
    sellingPrice: '',
    productName: '',
    category: 'electronics',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product', product);
    updateLocalStorage(product);
    setProduct({
      productId: '',
      sellingPrice: '',
      productName: '',
      category: 'electronics',
    });
  };

  const updateLocalStorage = (newProduct) => {
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

    const updatedProducts = [...existingProducts, newProduct];

    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productId">Product ID</label>
          <input type="number" id="productId" value={product.productId} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="sellingPrice">Selling Price</label>
          <input type="number" id="sellingPrice" value={product.sellingPrice} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="productName">Product Name</label>
          <input type="text" id="productName" value={product.productName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="category">Choose a Category</label>
          <select id="category" value={product.category} onChange={handleChange}>
            <option value="electronics">Electronics</option>
            <option value="food">Food</option>
            <option value="skincare">Skincare</option>
          </select>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Inputs;
