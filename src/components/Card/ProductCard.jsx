import React from 'react';

const ProductCard = ({ product }) => {
  const handleOrderClick = () => {
    alert(`تم طلب ${product.name}`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="product-price">سعر: {product.price}</p> 
      <button onClick={handleOrderClick} className="order-button">
        طلب
      </button>
    </div>
  );
};

export default ProductCard;
