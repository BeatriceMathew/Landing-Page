import React, { useState } from "react";
import Styles from "./OrderView.module.scss";
import Sidebar from "../../components/sidebar/Sidebar";


const OrderView = () => {
  const [order] = useState({
    order_id: "12345",
    order_datetime: "2025-02-18",
    order_plan: "Premium Room Makeover",
    order_description: "A modern and cozy living room design with neutral colors.",
    order_design: "Minimalist theme with wooden accents.",
    type: "Living Room",
    subcategory: "Modern Design",
    designer: "Designer X",
    user: "User A",
    order_vstatus: "Pending",
  });

  return (
    <div className={Styles.orderContainer}>
      <Sidebar />
      <div className={Styles.orderContent}>
        <h2>Order Details</h2>
        <div className={Styles.orderDetails}>
          <p><strong>Order ID:</strong> {order.order_id}</p>
          <p><strong>Date & Time:</strong> {order.order_datetime}</p>
          <p><strong>Plan:</strong> {order.order_plan}</p>
          <p><strong>Description:</strong> {order.order_description}</p>
          <p><strong>Design:</strong> {order.order_design}</p>
          <p><strong>Type:</strong> {order.type}</p>
          <p><strong>Subcategory:</strong> {order.subcategory}</p>
          <p><strong>Designer:</strong> {order.designer}</p>
          <p><strong>User:</strong> {order.user}</p>
          <p><strong>Status:</strong> {order.order_vstatus}</p>
        </div>

       
      </div>
    </div>
  );
};

export default OrderView;
