import React from "react";
import Styles from "./index.module.scss";

const Index = () => {
  return (
    <div className={Styles.index} id="home">
      <h1>"Let Your Home Be Unique"</h1>
      <p className={Styles.paragraph}>welcome</p>
      <div className={Styles.image}>
        <img
          className={Styles.bgimage}
          src="https://api.photon.aremedia.net.au/wp-content/uploads/sites/2/umb-media/25922/resort-style-1980s-home-renovation-living-room-vaulted-a-frame-ceiling.jpg?crop=0px%2C851px%2C1467px%2C771px&resize=1200%2C630"
        />
        <div className={Styles.content}>
          <p>
            "Transform Your Space, Elevate Your Life. Discover the art of
            contemporary design sleek lines, modern elegance, and timeless
            comfort."
          </p>
        </div>
        <div className={Styles.video}>
          <video width="800" controls autoPlay muted loop playsInline>
            <source
              src="https://media.istockphoto.com/id/1065832096/video/modern-apartment-living-room.mp4?s=mp4-640x640-is&k=20&c=qaTo21LFdUVtA0dCZaPjvQ2tBhjfmer2uBm3LM2uWdM="
              className={Styles.iframe}
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Index;
