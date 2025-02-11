import React from "react";
import Styles from "./footer.module.scss";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.container}>
        <div className={Styles.about}>
          <h3> Engage With Us In Conversation</h3>
          <p>
            "Let’s Transform Your Space Together! Connect with our expert
            designers at RoomRevamp and start creating your dream interiors
            today."
          </p>
        </div>
        <div className={Styles.image}>
          <img
            className={Styles.simage}
            src="https://fabdiz.com/wp-content/uploads/2023/12/traditional-indian-interior-design.jpg"
          ></img>
        </div>
        <br />
        <div className={Styles.links}>
          <div>
            <h4>About</h4>
            <p>Designers</p>
            <br />
            <p>Designs</p>
            <br />
            <p>Terms of Service</p>
          </div>
        </div>
        <br />
        <div className={Styles.contact}>
          <h4>Contact Us</h4>
          <p>Email: support@roomrevamp.com</p>
          <br />
          <p>Phone: +1 234 567 890</p>
          <br />
          <p>Address: 123 Design Lane, Creativity City</p>
          <br />
        </div>

        <div className={Styles.social}>
          <h4>Follow Us</h4>
          <div className={Styles.icons}>
            <p>
              {" "}
              <a href="https://www.facebook.com">Facebook</a>
            </p>
            <br />
            <p>
              <a href="https://www.instagram.com">Instagram</a>
            </p>
            <br />
            <p>
              <a href="https://www.twitter.com">Twitter</a>
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.Images}>
        <div className={Styles.top}>Download</div>
        <div className={Styles.img}>
          <img
            className={Styles.icon}
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            alt="Download Android App"
          ></img>
          <img
            className={Styles.icon}
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            alt="Download iOS App"
          ></img>
        </div>
      </div>

      <div className={Styles.bottom}>
        <p>
          &copy; {new Date().getFullYear()} RoomRevamp. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
