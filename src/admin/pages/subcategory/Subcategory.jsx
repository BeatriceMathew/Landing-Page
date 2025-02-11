import React, { useEffect, useState } from "react";
import Styles from "./subcategory.module.scss";
import { Box, Button, TextField } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";

const Subcategory = () => {
  
  const [name, setName] = useState("");
  const [category_id, setCategory] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        category_id,
      };
      const response = await axios.post("http://127.0.0.1:8000/subcategory", data);
      console.log("subcategory added successful:", response.data);
      setName("");
      setCategory("");
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  const fetchCategory = () => {
    axios.get(`http://127.0.0.1:8000/category`).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div className={Styles.container}>
      <div className={Styles.con}>
        <div className={Styles.navbar}>
          <Navbar />
        </div>
      </div>
      <div className={Styles.Container}>
        <div className={Styles.subcontainer}>
          <div className={Styles.sidebar}>
            <Sidebar />
          </div>
          <Box  component={"form"} onSubmit={handleSubmit} className={Styles.subcategory}>
            <h2 className={Styles.title}>Sub Category</h2>
            <div className={Styles.Text}>
              <select className={Styles.Sel} onChange={(e) => setCategory(e.target.value)} value={category_id}>
                <option>Category</option>
                {data &&
                  data.map((item, index) => (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <TextField
                className={Styles.Field}
                id="standard-basic"
                label="Subcategory Name"
                variant="standard"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <Button
                type="submit"
                className={Styles.Buttons}
                variant="contained"
              >
                Submit
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Subcategory;
