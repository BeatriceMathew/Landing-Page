import React, { useState } from "react"; 
import Styles from "./DesignerProfile.module.scss";
import { Button } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";


const DesignerProfile = () => {
  const [designer, setDesigner] = useState({
    name: "Designer Name",
    profilePic: "https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg",
    bio: "Passionate interior designer specializing in modern aesthetics.",
    posts: [
      { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9vo6mXinlEMKQ3BkSyGY7FKn04i4XeizRA&s", likes: 120, liked: false },
      { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9vo6mXinlEMKQ3BkSyGY7FKn04i4XeizRA&s", likes: 85, liked: false },
    ],
    reels: [
      { id: 1, video: "https://videos.pexels.com/video-files/6832166/6832166-sd_506_960_25fps.mp4", likes: 200, liked: false },
      { id: 2, video: "https://videos.pexels.com/video-files/6832166/6832166-sd_506_960_25fps.mp4", likes: 150, liked: false },
    ],
  });


  return (
    <div className={Styles.profileContainer}>
      <div className={Styles.sub}>
        <Sidebar />
      </div>
      <div className={Styles.profileHeader}>
        <img src={designer.profilePic} alt="Profile" className={Styles.profilePic} />
        <div className={Styles.profileInfo}>
          <h2>{designer.name}</h2>
          <p>{designer.bio}</p>
          <Button variant="contained" color="primary">Order Now</Button>
        </div>
      </div>
      <div className={Styles.contentSection}>
        <h3>Posts</h3>
        <div className={Styles.postsGrid}>
          {designer.posts.map((post) => (
            <div key={post.id} className={Styles.post}>
              <img src={post.image} alt="Post" />
            </div>
          ))}
        </div>
      </div>
      <div className={Styles.contentSection}>
        <h3>Reels</h3>
        <div className={Styles.reelsGrid}>
          {designer.reels.map((reel) => (
            <div key={reel.id} className={Styles.reel}>
              <video src={reel.video} controls autoPlay loop muted></video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignerProfile;