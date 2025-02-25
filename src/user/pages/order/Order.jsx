import React, { useState } from "react";
import Styles from "./order.module.scss";
import Sidebar from "../../components/sidebar/Sidebar";

const CreateOrder = () => {
  const [types] = useState([
    { id: 1, name: "Type A" },
    { id: 2, name: "Type B" },
  ]);
  const [categories] = useState([
    { id: 1, name: "category 1" },
    { id: 2, name: "category 2" },
  ]);

  const [subcategories] = useState([
    { id: 1, name: "Subcategory 1" },
    { id: 2, name: "Subcategory 2" },
  ]);

  const [designers] = useState([
    { id: 1, name: "Designer X" },
    { id: 2, name: "Designer Y" },
  ]);

  const [order, setOrder] = useState({
    order_datetime: "",
    order_plan: "",
    order_description: "",
    order_design: "",
    type_id: "",
    subcategory_id: "",
    designer_id: "",
    user_id: "",
    order_vstatus: 1, // default to status "1"
    file: null,
  });

  const handleInputChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setOrder({ ...order, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !order.order_datetime ||
      !order.order_plan ||
      !order.order_description ||
      !order.order_design ||
      !order.type_id ||
      !order.subcategory_id ||
      !order.designer_id ||
      !order.user_id ||
      !order.file
    ) {
      alert("Please fill all required fields.");
      return;
    }

    alert(`Order created successfully for Designer ${order.designer_id}`);
    setOrder({
      order_datetime: "",
      order_plan: "",
      order_description: "",
      order_design: "",
      type_id: "",
      subcategory_id: "",
      designer_id: "",
      user_id: "",
      order_vstatus: 1,
      file: null,
    });
  };

  return (
    <div className={Styles.orderContainer}>
      <div className={Styles.sidebar}>
        <Sidebar />
      </div>
      <div className={Styles.orderContent}>
        <h2>Create Order</h2>

        <form className={Styles.formContainer} onSubmit={handleSubmit}>
          <label>Order Date & Time:</label>
          <input
            type="date"
            name="order_datetime"
            value={order.order_datetime}
            onChange={handleInputChange}
          />

          <label>Designer:</label>
          <select
            name="designer_id"
            value={order.designer_id}
            onChange={handleInputChange}
          >
            <option value="">Select Designer</option>
            {designers.map((designer) => (
              <option key={designer.id} value={designer.id}>
                {designer.name}
              </option>
            ))}
          </select>

          <label>Plan File:</label>
          <input type="file" onChange={handleFileChange} />

          <label>Order Description:</label>
          <textarea
            name="order_description"
            value={order.order_description}
            onChange={handleInputChange}
            placeholder="Describe the design needs"
          />

          <label>Order Design:</label>
          <input
            type="text"
            name="order_design"
            value={order.order_design}
            onChange={handleInputChange}
            placeholder="Enter design details"
          />

          <label>Type:</label>
          <select
            name="type_id"
            value={order.type_id}
            onChange={handleInputChange}
          >
            <option value="">Select Type</option>
            {types.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>

          <label>Category:</label>
          <select
            name="category_id"
            value={order.category_id}
            onChange={handleInputChange}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <label>Subcategory:</label>
          <select
            name="subcategory_id"
            value={order.subcategory_id}
            onChange={handleInputChange}
          >
            <option value="">Select Subcategory</option>
            {subcategories.map((subcategory) => (
              <option key={subcategory.id} value={subcategory.id}>
                {subcategory.name}
              </option>
            ))}
          </select>

          <button type="submit" className={Styles.button}>Order Now</button>
        </form>
      </div>
    </div>
  );
};

export default CreateOrder;
