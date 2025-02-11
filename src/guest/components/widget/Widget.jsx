import React from "react";
import Styles from "./widget.module.scss";
//import About from '../about/About'
// import { Link } from "react-router-dom";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Widget = () => {
  return (
    <div className={Styles.widget}>
      <div className={Styles.subindex}>
        <div className={Styles.image}>
          <img
            className={Styles.simage}
            src="https://media.designcafe.com/wp-content/uploads/2021/05/24171523/indian-traditional-white-minimalist-living-room.jpg"
          ></img>
        </div>
        <div className={Styles.content} id="about">
          <h3 className={Styles.heading}>About Our Website</h3>
          <p>
            Welcome to RoomRevamp, where your dream spaces come to life! We
            connect you with talented interior designers who transform ordinary
            spaces into extraordinary experiences. Whether you're revamping your
            home or office, our platform offers a seamless journey, from
            discovering design ideas to collaborating with professionals on your
            dream project. With a focus on personalization, RoomRevamp helps you
            find designers that match your unique style and preferences. Track
            your project's progress in real-time, and enjoy a secure,
            transparent experience from start to finish. By combining
            cutting-edge technology with creative expertise, RoomRevamp
            redefines how interior design services are accessed, turning your
            vision into reality with ease and elegance. RoomRevamp – Where
            Vision Meets Design.
          </p>

          <div className="about-link">
            {/* <Link to="/About">
              About Us <ArrowForwardIcon />
            </Link> */}
          </div>
        </div>
      </div>

      <div className={Styles.main}>
        <div className={Styles.rating}>
          <span className={Styles.count}>500+</span>
          <span className={Styles.name}>Designs</span>
        </div>
        <div className={Styles.rating}>
          <span className={Styles.count}>200+</span>
          <span className={Styles.name}>Designers</span>
        </div>
        <div className={Styles.rating}>
          <span className={Styles.count}>400+</span>
          <span className={Styles.name}>Satisfied Customers</span>
        </div>
        <div className={Styles.rating}>
          <span className={Styles.count}>1st</span>
          <span className={Styles.name}>Top 1 in India</span>
        </div>
      </div>

      {/* Designs */}
      <div className={Styles.container}>
        <div className={Styles.designs} id="design">
          <span className={Styles.head}>Explore Our Stunning Designs </span>
        </div>
        <div className={Styles.dcontent}>
          <p>
            "Discover a wide range of interior design styles, from modern
            minimalist to classic elegance. Our talented designers have
            transformed countless spaces, bringing unique visions to life.
            Browse through our curated gallery to see how we can turn your dream
            space into reality. Whether you’re looking for inspiration or ready
            to start your own project, we’re here to help."
          </p>
        </div>

        <div className={Styles.images}>
          <div>
            <div className={Styles.image1}>
              <img
                className={Styles.simage}
                src="https://www.artemisiacollege.com/wp-content/uploads/2020/01/INTERIOR-DESIGN.jpg"
              ></img>
            </div>
          </div>
          {/* <div className={Styles.video}>
            <video width="800" controls autoPlay muted loop playsInline>
              <source
                src="https://media.istockphoto.com/id/1065832096/video/modern-apartment-living-room.mp4?s=mp4-640x640-is&k=20&c=qaTo21LFdUVtA0dCZaPjvQ2tBhjfmer2uBm3LM2uWdM="
                className={Styles.iframe}
              />
            </video>
          </div>  */}
          <div>
            <div className={Styles.image2}>
              <img
                className={Styles.simage}
                src="https://www.finehomelamps.com/wp-content/uploads/2019/03/Reasons-To-Love-Contemporary-1.jpg"
              ></img>
            </div>
          </div>
          <div>
            <div className={Styles.image3}>
              <img
                className={Styles.simage}
                src="https://www.homemakersinterior.com/wp-content/uploads/2023/07/28.png"
              ></img>
            </div>
          </div>
          <div>
            <div className={Styles.image4}>
              <img
                className={Styles.simage}
                src="https://i.pinimg.com/736x/af/bd/02/afbd02e8adf355aa66fb98bd490c2801.jpg"
              ></img>
            </div>
          </div>
          <div>
            <div className={Styles.image5}>
              <img
                className={Styles.simage}
                src="https://landmarksarchitects.com/wp-content/uploads/2024/04/Modern-Luxury-Living-Room-08.04.2024.jpg"
              ></img>
            </div>
          </div>
          <div>
            <div className={Styles.image6}>
              <img
                className={Styles.simage}
                src="https://www.andacademy.com/resources/wp-content/uploads/2024/04/13-1.webp"
              ></img>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className={Styles.testimonials} id="testimonials">
        <div className={Styles.heads}>
          <span className={Styles.head}>User </span>
          <span> Testimonials</span>
        </div>
        <div className={Styles.test}>
          <div className={Styles.testimony}>
            <div className={Styles.userimage}>
              <img
                src="https://images.emtcontent.com/holiday-img/home-img/user.png"
                className={Styles.userimg}
              />
            </div>
            <div className={Styles.usertext}>
              "Incredible service! The designer brought my dream home to life
              with unmatched attention to detail."
            </div>
          </div>
          <div className={Styles.testimony}>
            <div className={Styles.userimage}>
              <img
                src="https://images.emtcontent.com/holiday-img/home-img/user.png"
                className={Styles.userimg}
              />
            </div>
            <div className={Styles.usertext}>
              "I loved how the designer understood my taste and delivered
              exactly what I envisioned. Amazing experience!"
            </div>
          </div>
          <div className={Styles.testimony}>
            <div className={Styles.userimage}>
              <img
                src="https://images.emtcontent.com/holiday-img/home-img/user.png"
                className={Styles.userimg}
              />
            </div>
            <div className={Styles.usertext}>
              "The designer transformed my living space into something truly
              stunning! Highly professional and creative."
            </div>
          </div>
        </div>

        {/* //why choose as */}

        <div className={Styles.heads}>
          <span className={Styles.head}>Why </span>
          <span className={Styles.minihead}> Choose Us</span>
        </div>
        <div className={Styles.tests}>
          <div className={Styles.whys}>
            <div className={Styles.whyimage}>
              <img
                src="https://www.sbid.org/wp-content/uploads/2022/03/preventivo-ristrutturazione-casa.jpg"
                alt="Professional Designers"
                className={Styles.whyimg}
              />
            </div>
            <div className={Styles.whycontent}>
              <span>
                Our designers are highly skilled professionals committed to
                transforming your space.
              </span>
            </div>
          </div>
          <div className={Styles.whys}>
            <div className={Styles.whyimage}>
              <img
                src="https://i.pinimg.com/564x/75/0a/66/750a66d206469f712a0ce419813f3675.jpg"
                alt="Custom Designs"
                className={Styles.whyimg}
              />
            </div>
            <div className={Styles.whycontent}>
              <span>
                We offer personalized design solutions to match your taste and
                preferences.
              </span>
            </div>
          </div>
          <div className={Styles.whys}>
            <div className={Styles.whyimage}>
              <img
                src="https://static3.depositphotos.com/1000117/101/i/450/depositphotos_1011524-stock-photo-empty.jpg"
                alt="Affordable Prices"
                className={Styles.whyimg}
              />
            </div>
            <div className={Styles.whycontent}>
              <span>
                Get high-quality design services at competitive and affordable
                rates.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
