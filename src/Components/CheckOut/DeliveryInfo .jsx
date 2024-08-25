
import "./CSS/CheckOut.css"
import { useState } from 'react';

const DeliveryInfo = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  // Handle mobile number input to only accept numbers
  const handleMobileChange = (e) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setMobileNumber(value);
    }
  };

  return (
    <div className="form-container">
      <h2>Delivery Information</h2>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name " />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="text"
              value={mobileNumber}
              onChange={handleMobileChange}
              placeholder="+92 *********"
              noValidate
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="firstnamelastname112@example.com" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="Karachi" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Region</label>
            <input type="text" placeholder="Sindh" />
          </div>
          <div className="form-group">
            <label>Postal/ZIP Code</label>
            <input type="text" placeholder="55289" />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" placeholder="pakistan" />
          </div>
        </div>
        <div className="form-group full-width">
          <label>Address</label>
          <input type="text" placeholder="PECHS Street" />
        </div>
        <div className="form-group full-width">
          <label>Schedule Delivery</label>
          <input type="date" />
        </div>
        <div className="form-group full-width">
          <label>Payment Method</label>
          <div className="payment-methods">
            <label>
              <input type="radio" name="payment" /> Online Payment
            </label>
            <label>
              <input type="radio" name="payment" /> Cash on Delivery
            </label>
            <label>
              <input type="radio" name="payment" /> POS on Delivery
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeliveryInfo;
