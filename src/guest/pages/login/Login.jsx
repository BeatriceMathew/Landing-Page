
import React from 'react'
import Styles from './Login.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
//import { Button, TextField } from '@mui/material';
const login = () => {
return (
    <div className={Styles.logform}>
    <div className={Styles.form}>
    <div className={Styles.part2}>
      <div className={Styles.close}></div>

      <div className={Styles.titles}>
        <span className={Styles.title}>Login</span>

      </div>
      <div className={Styles.fields}>
        <div className={Styles.field}>
          <input type='email' name='email' id='email' placeholder='enter email' className={Styles.email}/>
          <input type='password' name='password' id='password' placeholder='enter password' className={Styles.password}/>

        </div>
      </div>
      <div className={Styles.btn}>
        <input type='submit' name='register' id='register' value='Save'
         className={Styles.submit}/>
      </div>
      <div className={Styles.policy}>
        <span className={Styles.Policy}>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</span>
      </div>
    </div>
      </div>
    </div>
  )
}

export default login
