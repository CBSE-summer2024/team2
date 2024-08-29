import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'; 
import './ProductCard.css';  

import list from '../../../data.json';  

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(list.list || []);
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
