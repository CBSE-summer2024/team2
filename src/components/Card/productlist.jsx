import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'; 
import './ProductCard.css';  

import data from '../../../data.json';  // تأكد من المسار الصحيح للملف

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.list || []);  // تأكد من استخدام البيانات من المفتاح 'list'
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
