import React from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { getDeliveryOption } from '../data/deliveryOptions';
import CartItem from '../components/CartItem';
import PaymentSummary from '../components/PaymentSummary';
import '../styles/pages/checkout/checkout-header.css';
import '../styles/pages/checkout/checkout.css';

const Checkout = () => {
  const { cart } = useCart();

  const cartSummary = cart.map(cartItem => {
    const product = products.find(p => p.id === cartItem.productId);
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    return { ...cartItem, product, deliveryOption };
  }).filter(item => item.product);

  const formatDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  return (
    <div className="checkout-page">
      <div className="page-title">Review your order</div>

      <div className="checkout-grid">
        <div className="order-summary">
          {cartSummary.length === 0 ? (
            <p>Your cart is empty. <a href="/">Shop now</a></p>
          ) : (
            cartSummary.map((item) => (
              <CartItem 
                key={item.productId} 
                item={item} 
                formatDate={formatDate} 
              />
            ))
          )}
        </div>

        <PaymentSummary cartSummary={cartSummary} />
      </div>
    </div>
  );
};

export default Checkout;
