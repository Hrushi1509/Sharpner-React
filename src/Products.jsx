import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, [products]);

  const removeProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.productId !== productId);
    setProducts(updatedProducts);

    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const renderProductsByCategory = (category) => {
    return (
      <div key={category}>
        <h2>{`${category} Items`}</h2>
        <ul>
          {products
            .filter((product) => product.category === category)
            .map((product) => (
                <>
              <li key={product.productId}>
                {`Product ID: ${product.productId}, Selling Price: ${product.sellingPrice}, Product Name: ${product.productName}`}
                <button onClick={() => removeProduct(product.productId)}>Remove</button>
              </li>
                
                </>
            ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <div>
        <h1>Products</h1>
        {renderProductsByCategory('electronics')}
        {renderProductsByCategory('food')}
        {renderProductsByCategory('skincare')}
      </div>
    </div>
  );
};

export default Products;
