import React from 'react'
//import Navbar from '../../components/navbar/Navbar'
import Styles from './Profile.module.scss'
import Main from './component/main/Main'
import Sidebar from '../../components/sidebar/Sidebar'
const Profile = () => {
  return (
    <div className={Styles.container}>
        
        <div className={Styles.sub}>

   
        <div className={Styles.sidebar}>  <Sidebar/></div>
        <div className={Styles.main}>     <Main/></div>
   </div>

    </div>
  )
}

export default Profile