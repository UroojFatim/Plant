
import "./CSS/CheckOut.css"
import plant from '../../assets/Home/herbs.jpg';

const OrderSummary = () => {
  return (
    <div className="order-summary-container">
      <img 
        src={plant} 
        alt="Order Image" 
        className="order-summary-image" 
      />
      <h2>Order Summary</h2>
      <div className="order-item">
        <span>Plant</span>
        <span>1000 Rs</span>
      </div>
    
      <div className="order-total">
        <span>Subtotal</span>
        <span>1000 Rs</span>
      </div>
      <div className="order-total">
        <span>Shipping</span>
        <span>0.00</span>
      </div>
      <div className="order-total">
        <span>Total</span>
        <span>1000 Rs</span>
      </div>
      <button 
        className="Order_btn">
        Confirm Order
      </button>
    </div>
  );
};

export default OrderSummary;
