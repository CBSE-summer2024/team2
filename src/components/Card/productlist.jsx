import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../../main.css';
import Footer from '../Footer/footer.jsx'
import list from '../../../data.json';
import CategoryList from '../../router.js'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(list.list || []);
  }, []);

  return (<>
    <CategoryList></CategoryList>
    <div className="category">
      <Footer></Footer>
    </div>
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </>
  );
};

export default ProductList;
