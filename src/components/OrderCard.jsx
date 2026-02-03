import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const OrderCard = ({ order, formatDate }) => {
  const { addToCart } = useCart();

  return (
    <div className="order-container">
      <div className="order-header">
        <div className="order-header-left-section">
          <div className="order-date">
            <div className="order-header-label">Order Placed:</div>
            <div>{formatDate(order.orderTimeMs)}</div>
          </div>
          <div className="order-total">
            <div className="order-header-label">Total:</div>
            <div>${(order.totalCostCents / 100).toFixed(2)}</div>
          </div>
        </div>
        <div className="order-header-right-section">
          <div className="order-header-label">Order ID:</div>
          <div>{order.id}</div>
        </div>
      </div>

      <div className="order-details-grid">
        {order.products.map((item) => {
          const product = products.find(p => p.id === item.productId);
          if (!product) return null;

          return (
            <React.Fragment key={item.productId}>
              <div className="product-image-container">
                <img src={`/${product.image}`} alt={product.name} />
              </div>
              <div className="product-details">
                <div className="product-name">{product.name}</div>
                <div className="product-delivery-date">
                  Arriving on: {formatDate(item.estimatedDeliveryTimeMs)}
                </div>
                <div className="product-quantity">
                  Quantity: {item.quantity}
                </div>
                <button 
                  className="buy-again-button button-primary"
                  onClick={() => addToCart(product.id, 1)}
                >
                  <img className="buy-again-icon" src="/images/icons/buy-again.png" alt="buy again" />
                  <span className="buy-again-message">Add to Cart</span>
                </button>
              </div>
              <div className="product-actions">
                <Link to={`/tracking?orderId=${order.id}&productId=${product.id}`}>
                  <button className="track-package-button button-secondary">
                    Track package
                  </button>
                </Link>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default OrderCard;
