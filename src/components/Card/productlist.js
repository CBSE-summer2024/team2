import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'; 
import './ProductCard.css';  

import productlist from '../api/faker.json';  

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productlist.productlist || []);
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
