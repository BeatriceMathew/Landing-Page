import React from "react";
import Styles from "./header.module.scss";
import SearchSharpIcon from "@mui/icons-material/SearchOutlined";
//import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import PersonIcon from '@mui/icons-material/Person';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// import PersonIcon from "@mui/icons-material/Person";
// import { Link } from 'react-router-dom';
import BasicMenu from "../basicmenu/BasicMenu";
const Header = () => {
  return (
    <div className={Styles.Header}>
      <div className={Styles.wrapper}>
        <div className={Styles.name}>
          <div className={Styles.head}>
            <span>ROOMREVAMP</span>
          </div>

          <div className={Styles.search}>
        <button className={Styles.btn} ><SearchSharpIcon /></button>
           
            <input type='text' className={Styles.txt} placeholder='search your destination' />
            {/* <input type='submit' name='search' value='<SearchSharpIcon/>' className={Styles.btn} /> */}
          </div></div>

        <div className={Styles.items}>
          <div className={Styles.item1}>
            <span><a href="#home">Home</a>
            </span>
          </div>
          <div className={Styles.item1}>
            <span><a href="#about">About</a>
            </span>
          </div>
          <div className={Styles.item1}>
            <span><a href="#design">Design</a>
            </span>
          </div>
          <div className={Styles.item1}>
            <span><a href="#testimonials">Testimonials</a>
            </span>
          </div>
        </div>
        <div className={Styles.Logins}>
          <div className={Styles.Login}>
            {/* <PersonIcon  /> */}
            <BasicMenu />

            {/* <Link to={'./register'} className={Styles.btn}>Login</Link>  */}
          </div>
        </div></div>
      </div>
    //</div>
  );
};

export default Header;
