import React from 'react';
import { orders } from '../data/orders';
import OrderCard from '../components/OrderCard';
import '../styles/pages/orders.css';

const Orders = () => {
  const formatDate = (ms) => {
    return new Date(ms).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  };

  return (
    <div className="orders-page">
      <div className="page-title">Your Orders</div>
      <div className="orders-grid">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} formatDate={formatDate} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
