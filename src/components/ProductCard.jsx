import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedMessageVisible, setAddedMessageVisible] = useState(false);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    
    // Show "Added" message feedback
    setAddedMessageVisible(true);
    setTimeout(() => {
      setAddedMessageVisible(false);
    }, 2000);
  };

  const [currentRating, setCurrentRating] = useState(product.rating.stars);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingClick = (newRating) => {
    setCurrentRating(newRating);
    // In a real app, you might sync this with a backend or global state
  };

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={`/${product.image}`} alt={product.name} />
      </div>

      <div className="product-name limit-text-to-2-lines">
        {product.name}
      </div>

      <div className="product-rating-container">
        <div className="stars-interactive">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= (hoverRating || currentRating) ? 'filled' : ''}`}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => handleRatingClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">
        ${(product.priceCents / 100).toFixed(2)}
      </div>

      <div className="product-quantity-container">
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </div>

      <div className="product-spacer"></div>

      <div className={`added-to-cart ${addedMessageVisible ? 'visible' : ''}`} style={{ opacity: addedMessageVisible ? 1 : 0 }}>
        <img src="/images/icons/checkmark.png" alt="Added" />
        Added
      </div>

      <button 
        className="add-to-cart-button button-primary"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
