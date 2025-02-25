
import React, { useState } from 'react'
import Styles from './Login.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import axios from 'axios';
//import { Button, TextField } from '@mui/material';
const login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password
      }
      const response = await axios.post('http://127.0.0.1:8000/login', data)
      console.log('login successful:', response.data);
const {id,login}=response.data
if(login=="User"){
  sessionStorage.setItem("uid",id)
  navigate("/user")
}
if(login=="Designer"){
  sessionStorage.setItem("uid",id)
  navigate("/designer")
}
      setEmail("")
      setPassword("")
    } catch (error) {
      console.error('Error registering:', error);
    }
  };


return (
  <Box component={'form'} onSubmit={handleSubmit} className={Styles.Container}>
    <div className={Styles.logform}>
    <div className={Styles.form}>
    <div className={Styles.part2}>
      <div className={Styles.close}></div>

      <div className={Styles.titles}>
        <span className={Styles.title}>Login</span>

      </div>
      <div className={Styles.fields}>
        <div className={Styles.field}>
          <input type='text' name='email'  placeholder='enter email' className={Styles.email}           onChange={(e) => setEmail(e.target.value)}
          />
          <input type='password' name='password' placeholder='enter password' className={Styles.password} onChange={(e) => setPassword(e.target.value)}/>

        </div>
      </div>
      <div className={Styles.btn}>
        <Button type='submit'
         className={Styles.submit}>Login</Button>
      </div>
      <div className={Styles.policy}>
        <span className={Styles.Policy}>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</span>
      </div>
    </div>
      </div>
    </div>
    </Box>
  )
}

export default login
