import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { orders } from '../data/orders';
import { products } from '../data/products';
import '../styles/pages/tracking.css';

const Tracking = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get('orderId');
  const productId = queryParams.get('productId');

  const order = orders.find(o => o.id === orderId);
  if (!order) return <div>Order not found</div>;

  const item = order.products.find(p => p.productId === productId);
  if (!item) return <div>Product not found in order</div>;

  const product = products.find(p => p.id === productId);

  const formatDate = (ms) => {
    return new Date(ms).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  // Mock progress logic for demonstration
  const progressPercent = 50;

  return (
    <div className="tracking-page">
      <div className="order-tracking">
        <Link className="back-to-orders-link link-primary" to="/orders">
          View all orders
        </Link>

        <div className="delivery-date">
          Arriving on {formatDate(item.estimatedDeliveryTimeMs)}
        </div>

        <div className="product-info">{product.name}</div>
        <div className="product-info">Quantity: {item.quantity}</div>

        <img className="product-image" src={`/${product.image}`} alt={product.name} />

        <div className="progress-labels-container">
          <div className="progress-label">Preparing</div>
          <div className="progress-label current-status">Shipped</div>
          <div className="progress-label">Delivered</div>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
