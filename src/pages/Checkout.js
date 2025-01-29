import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cart, getTotalPrice, placeOrder } = useContext(CartContext);
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmPayment = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add items before confirming payment.");
      return;
    }
    if (!customerName || !phoneNumber) {
      alert("Please enter your name and phone number.");
      return;
    }

    placeOrder(customerName, phoneNumber); // Save order
    setIsConfirmed(true);
    alert("Payment confirmed! Your order has been placed successfully.");
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      {/* Order Summary */}
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="order-items">
            {cart.map((item) => (
              <div className="order-item" key={item.id}>
                <span>{item.name} (x{item.quantity})</span>
                <span>{item.price * item.quantity} Ksh</span>
              </div>
            ))}
            <div className="order-total">
              <span>Total:</span>
              <span>{getTotalPrice()} Ksh</span>
            </div>
          </div>
        )}
      </div>

      {/* Payment Instructions */}
      <div className="payment-info">
        <h2>Payment Instructions</h2>
        <p>Please send the total amount to:</p>
        <h3>0713022208</h3>
        <p>Once you've made the payment, enter your details below:</p>
      </div>

      {/* Customer Details */}
      <div className="customer-details">
        <input
          type="text"
          placeholder="Your Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      {/* Confirmation Button */}
      <div className="confirmation">
        <button 
          className="confirm-btn" 
          onClick={handleConfirmPayment} 
          disabled={isConfirmed}
        >
          {isConfirmed ? "Payment Confirmed ✅" : "Confirm Payment"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
