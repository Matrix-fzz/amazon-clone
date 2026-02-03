import React from 'react';
import { useCart } from '../context/CartContext';
import { deliveryOptions } from '../data/deliveryOptions';

const CartItem = ({ item, formatDate }) => {
  const { removeFromCart, updateQuantity, updateDeliveryOption } = useCart();

  return (
    <div className="cart-item-container">
      <div className="delivery-date">
        Delivery date: {formatDate(item.deliveryOption.deliveryDays)}
      </div>

      <div className="cart-item-details-grid">
        <img className="product-image" src={`/${item.product.image}`} alt={item.product.name} />

        <div className="cart-item-details">
          <div className="product-name">{item.product.name}</div>
          <div className="product-price">${(item.product.priceCents / 100).toFixed(2)}</div>
          <div className="product-quantity">
            <span>
              Quantity: <span className="quantity-label">{item.quantity}</span>
            </span>
            <span 
              className="update-quantity-link link-primary"
              onClick={() => {
                const newQty = prompt('Enter new quantity:', item.quantity);
                if (newQty && !isNaN(newQty)) updateQuantity(item.productId, Number(newQty));
              }}
            >
              Update
            </span>
            <span 
              className="delete-quantity-link link-primary"
              onClick={() => removeFromCart(item.productId)}
            >
              Delete
            </span>
          </div>
        </div>

        <div className="delivery-options">
          <div className="delivery-options-title">Choose a delivery option:</div>
          {deliveryOptions.map((option) => (
            <div 
              className="delivery-option" 
              key={option.id} 
              onClick={() => updateDeliveryOption(item.productId, option.id)}
            >
              <input 
                type="radio" 
                checked={item.deliveryOptionId === option.id}
                className="delivery-option-input"
                name={`delivery-option-${item.productId}`}
                readOnly
              />
              <div>
                <div className="delivery-option-date">{formatDate(option.deliveryDays)}</div>
                <div className="delivery-option-price">
                  {option.priceCents === 0 ? 'FREE Shipping' : `$${(option.priceCents / 100).toFixed(2)} - Shipping`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
