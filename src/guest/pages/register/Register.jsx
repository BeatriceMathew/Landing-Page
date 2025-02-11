import React, { useState } from "react";
import Styles from "./Register.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import axios from "axios";
import { Box, Button } from "@mui/material";

const Register = () => {
  
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [contact, setContact] = useState("")
const [bio, setBio] = useState("")
const [licence, setLicence] = useState("")
const [password, setPassword] = useState("")
const [photo, setPhoto] = useState("")
const [vstatus, setVstatus] = useState("")

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = {
      name,
      email,
      contact,
      bio,
      licence,
      password,
      photo,
      vstatus
    }
    const response = await axios.post("http://127.0.0.1:8000/designer", data);
    console.log("registration  successful:", response.data);
    setName("")
    setEmail("")
    setContact("")
    setBio("")
    setLicence("")
    setPassword("")
    setPhoto("")
    setVstatus("")
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

          <Box 
            component={"form"}
            onSubmit={handleSubmit}
            className={Styles.Container}
          >
            <div className={Styles.fields}>
              <div className={Styles.field}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                  value={name}
                  className={Styles.name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  className={Styles.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  placeholder="Enter contact"
                  value={contact}
                  className={Styles.contact}
                  onChange={(e) => setContact(e.target.value)}
                />
                <input
                  type="text"
                  name="bio"
                  id="bio"
                  placeholder="Enter bio"
                  value={bio}
                  className={Styles.bio}
                  onChange={(e) => setBio(e.target.value)}
                />
                <input
                  type="text"
                  name="licence"
                  id="licence"
                  placeholder="Enter licence Number"
                  value={licence}
                  className={Styles.licence}
                  onChange={(e) => setLicence(e.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  className={Styles.password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                 <input
                  type="file"
                  name="photo"
                  id="photo"
                  placeholder="Enter password"
                  value={photo}
                  className={Styles.password}
                  onChange={(e) => setPhoto(e.target.value)}
                />
                <input
                  type="txt"
                  name="status"
                  id="status"
                  placeholder="Enter status"
                  value={vstatus}
                  className={Styles.status}
                  onChange={(e) => setVstatus(e.target.value)}
                />
              </div>
            </div><br/>
            <div className={Styles.btn}>
            <Button type='submit' className={Styles.Buttons} variant="contained">Submit</Button>

            </div>
            <div className={Styles.policy}>
              <span className={Styles.policys}>By Register in,</span>
              <span className={Styles.policys}>
                I understand & agree to EaseMyTrip terms of use and privacy
                policy
              </span>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Register;

