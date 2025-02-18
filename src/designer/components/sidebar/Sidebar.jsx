import React from "react";
//import { FaHome, FaSearch, FaUserFriends, FaHeart, FaRegUserCircle } from "react-icons/fa";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SlowMotionVideoSharpIcon from '@mui/icons-material/SlowMotionVideoSharp';
import Styles from "./sidebar.module.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.logo}>
        <h1>RoomRevamp</h1>
      </div>
      <ul className={Styles.navLinks}>
        <li className={Styles.navItem}>
          <HomeOutlinedIcon className={Styles.icon} />
          <span><Link to='/designer' className={Styles.link}>  Home</Link></span>
        </li>
        <li className={Styles.navItem}>
          <SearchOutlinedIcon className={Styles.icon} />
          <span><Link to='/designer/search' className={Styles.link}>  Search</Link></span>
        </li>
        <li className={Styles.navItem}>
          <ExploreOutlinedIcon className={Styles.icon} />
          <span><Link to='/designer/explore' className={Styles.link}>  Explore</Link></span>
        </li>
        <li className={Styles.navItem}>
          <FavoriteBorderOutlinedIcon className={Styles.icon} />
          <span>Notifications</span>
        </li>
        <li className={Styles.navItem}>
          <SlowMotionVideoSharpIcon className={Styles.icon} />
          <span><Link to='/designer/reel' className={Styles.link}>  Reels</Link></span>
        </li>
        <li className={Styles.navItem}>
          <AddBoxOutlinedIcon className={Styles.icon} />
          <span>Create</span>
        </li>
        <li className={Styles.navItem}>
          <AccountCircleOutlinedIcon className={Styles.icon} />
          <span><Link to='/designer/profile' className={Styles.link}>  Account Info</Link></span>
        </li><br/><br/><br/>
      </ul><div className={Styles.navLinks}>
      <div className={Styles.navItem}>
        <LogoutOutlinedIcon className={Styles.icon}/>
        <span>LogOut</span>

      </div></div>
    </div>
  );
};

export default Sidebar;
