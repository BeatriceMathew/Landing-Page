import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
//import { MyTheme } from '../../context/ThemeContext'
import Styles from './type.module.scss'
import axios from 'axios'

export const Type = () => {
    //const [check, setCheck] = useState(true)
    const [name, setName] = useState("")
   
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const data = {
          name,
        };
        const response = await axios.post("http://127.0.0.1:8000/type", data);
        console.log("Type add  successful:", response.data);
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
      <div className={Styles.Container}>
        <div className={Styles.subcontainer}>
          <div className={Styles.sidebar}>
            <Sidebar />
          </div>
          
          <Box component={"form"} onSubmit={handleSubmit} className={Styles.type}>
            <h2 className={Styles.title}>Type</h2>
            <div className={Styles.Text}>
              <TextField
                className={Styles.Field}
                id="standard-basic"
                label="Type Name"
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
    
   
  )
}
