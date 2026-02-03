import React from 'react';
import { useCart } from '../context/CartContext';

const PaymentSummary = ({ cartSummary }) => {
  const { cartQuantity } = useCart();

  const itemsCostCents = cartSummary.reduce((total, item) => total + (item.product.priceCents * item.quantity), 0);
  const shippingCostCents = cartSummary.reduce((total, item) => total + item.deliveryOption.priceCents, 0);
  const totalBeforeTaxCents = itemsCostCents + shippingCostCents;
  const taxCents = Math.round(totalBeforeTaxCents * 0.1);
  const totalCents = totalBeforeTaxCents + taxCents;

  return (
    <div className="payment-summary">
      <div className="payment-summary-title">Payment Summary</div>
      
      <div className="payment-summary-row">
        <div>Items ({cartQuantity}):</div>
        <div className="payment-summary-money">${(itemsCostCents / 100).toFixed(2)}</div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div className="payment-summary-money">${(shippingCostCents / 100).toFixed(2)}</div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="payment-summary-money">${(totalBeforeTaxCents / 100).toFixed(2)}</div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div className="payment-summary-money">${(taxCents / 100).toFixed(2)}</div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money">${(totalCents / 100).toFixed(2)}</div>
      </div>

      <button className="place-order-button button-primary">
        Place your order
      </button>
    </div>
  );
};

export default PaymentSummary;
