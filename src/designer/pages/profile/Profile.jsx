import React from 'react'
import Styles from './profile.module.scss'
import { Link } from 'react-router-dom'
const Profile = () => {
  return (
    <div className={Styles.profile}>
      <div className={Styles.header}>
        <div className={Styles.profileImage}>
          <img
            src="https://t4.ftcdn.net/jpg/09/83/53/71/360_F_983537111_HLequ6Ob3SxuZwsXuQBdF6wb1PwvBPd4.jpg"
            alt="Profile"/>
        </div>
        <div className={Styles.profileDetails}>
          <div className={Styles.topRow}>
            <h2>username</h2>
            {/* <button className={Styles.editButton}>Edit Profile</button> */}
            <Link to={'./Editprofile'} className={Styles.editButton}>Edit Profile</Link> 
         
            
          </div>
          {/* <div className={Styles.stats}>
            <span><strong>54</strong> posts</span>
            <span><strong>3.2k</strong> followers</span>
            <span><strong>1.2k</strong> following</span>
          </div> */}
          <div className={Styles.bio}>
            <strong>Full Name</strong>
            <p>A short bio about the designer goes here.</p>
          </div>
        </div>
      </div>
      <div className={Styles.tabs}>
        <button>Posts</button>
        <button>Reels</button>
        
      </div>
      
      </div>
    //</div>
  )
}

export default Profile