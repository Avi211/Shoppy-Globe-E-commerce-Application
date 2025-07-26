import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-item">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />
      <h3>{product.title}</h3>
      <p><strong>${product.price}</strong></p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <Link to={`/product/${product.id}`}>View</Link>
        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductItem;
