import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../../main.css';
import list from '../../../data.json';
import CategoryListComponent from '../../router';
import Slider from '../Slider/slider.jsx';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(list.list || []);
  }, []);

  return (<>
    <div className="category">
      <CategoryListComponent></CategoryListComponent>
    </div>
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    <Slider></Slider>
  </>
  );
};

export default ProductList;
