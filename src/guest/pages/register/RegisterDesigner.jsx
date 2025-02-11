import React, { useState } from "react";
import Styles from "./Register.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import axios from "axios";
import { Box, Button } from "@mui/material";


const RegisterDesigner = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        name,
        email,
        contact,
        password,
      };
      const response = await axios.post("http://127.0.0.1:8000/user", data);
      console.log("registration  successful:", response.data);
      setName("");
      setEmail("");
      setContact("");
      setPassword("");
    } catch (error) {
      console.error("Error registering:", error);
    }
  };
  return (
    <div className={Styles.regform}>
      <div className={Styles.form}>
        <div className={Styles.part2}>
          <div className={Styles.close}></div>

          <div className={Styles.titles}>
            <span className={Styles.title}>Create Account</span>
          </div>
          <Box component={'form'} onSubmit={handleSubmit} className={Styles.Container}>

          <div className={Styles.fields}>
            <div className={Styles.field}>
              <input
                type="text"
                
                placeholder="enter name"
                className={Styles.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
               
                placeholder="enter email"
                className={Styles.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
               
                placeholder="enter password"
                className={Styles.password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="text"
               
                placeholder="enter contact"
                className={Styles.contact}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div><br/>
          <div className={Styles.btn}>
            <Button
              type="submit"
              className={Styles.Buttons}
              variant="contained"
            >
              Submit
            </Button>
          </div>
          <div className={Styles.policy}>
            <span className={Styles.policys}>By logging in,</span>
            <span className={Styles.policys}>
              I understand & agree to Roomrevamp terms of use and privacy policy
            </span>
          </div>
          </Box>
        </div>
        
      </div>
    </div>
  );
};

export default RegisterDesigner;
