import React, { useState } from "react";
import Styles from "./payment.module.scss";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Payment successful using ${paymentMethod.toUpperCase()}!`);
  };

  return (
    <div className={Styles.paymentContainer}>
      <div className={Styles.paymentBox}>
        <h2> Payment</h2>
        <form className={Styles.paymentForm} onSubmit={handlePayment}>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="netbanking">Net Banking</option>
            
          </select>

          {paymentMethod === "card" && (
            <>
              <input type="text" placeholder="Card Number" required />
              <input type="text" placeholder="MM/YY" required />
              <input type="text" placeholder="CVV" required />
            </>
          )}

          {paymentMethod === "upi" && <input type="text" placeholder="Enter UPI ID" required />}
          {paymentMethod === "netbanking" && <input type="text" placeholder="Enter Bank Name" required />}

          <button type="submit" className={Styles.payButton}>Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
