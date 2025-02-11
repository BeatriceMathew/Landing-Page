import React, { useState } from "react";
import Styles from "./category.module.scss";
import { Box, Button, TextField } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
export const Category = () => {
    const [name, setName] = useState("")
   
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const data = {
          name,
        };
        const response = await axios.post("http://127.0.0.1:8000/category", data);
        console.log("category add  successful:", response.data);
        setName("")
      } catch (error) {
        console.error("Error registering:", error);
      }
    };
  return (
    <div className={Styles.container}>
      <div className={Styles.con}>
        <div className={Styles.navbar}>
          <Navbar />
        </div>
      </div>

      <div className={Styles.subcontainer}>
        <div className={Styles.sidebar}>
          <Sidebar />
        </div>
        <div className={Styles.category}>
        <Box component={'form'} onSubmit={handleSubmit} className={Styles.Container}>

          <h2 className={Styles.title}>Category</h2><hr color="#ccc"/>
          <div className={Styles.inputGroup}>
            <div className={Styles.Text}>
              <TextField
                className={Styles.input}
                id="standard-basic"
                label="Category Name"
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                type="submit"
                className={Styles.Buttons}
                variant="contained"
              >
                Submit
              </Button>
            </div>
          </div>
        </Box>
      </div>

      </div>
    </div>
  );
};
