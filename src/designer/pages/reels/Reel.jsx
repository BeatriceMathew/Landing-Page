import React, { useState } from "react";
import Styles from "./Reel.module.scss";
import Sidebar from "../../components/sidebar/Sidebar";

const Reel = () => {
  const [reels, setReels] = useState([
    {
      id: 1,
      user: "User_1",
      profilePic:
        "https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg?w=300",
      video:
        "https://videos.pexels.com/video-files/6832166/6832166-sd_506_960_25fps.mp4",
      caption: "Amazing landscape! #nature #travel",
      likes: 120,
      comments: 10,
    },
    {
      id: 2,
      user: "User_2",
      profilePic:
        "https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg?w=300",
      video:
        "https://videos.pexels.com/video-files/6803592/6803592-sd_506_960_25fps.mp4",
      caption: "Check out this beautiful cityscape! #urban #travel",
      likes: 200,
      comments: 25,
    },
    {
      id: 3,
      user: "User_3",
      profilePic:
        "https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg?w=300",
      video:
        "https://videos.pexels.com/video-files/6832166/6832166-sd_506_960_25fps.mp4",
      caption: "The beauty of wildlife! #animals #nature",
      likes: 300,
      comments: 30,
    },
    {
      id: 4,
      user: "User_4",
      profilePic:
        "https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg?w=300",
      video:
        "https://videos.pexels.com/video-files/6832166/6832166-sd_506_960_25fps.mp4",
      caption: "Amazing landscape! #nature #travel",
      likes: 120,
      comments: 10,
    },
  ]);

  return (
    <div className={Styles.reelsContainer}>
      <div className={Styles.sub}>
        <Sidebar />
      </div>
      <div className={Styles.reel}>
        {reels.map((reel) => (
          <div key={reel.id} className={Styles.Reel}>
            <video className={Styles.reelVideo} controls autoPlay loop muted>
              <source src={reel.video} type="video/mp4" />
            </video>
            <div className={Styles.reelInfo}>
              <div className={Styles.reelUser}>
                <img
                  className={Styles.reelProfilePic}
                  src={reel.profilePic}
                  alt="Profile"
                />
                <span className={Styles.reelUsername}>{reel.user}</span>
              </div>
              <p className={Styles.reelCaption}>{reel.caption}</p>
              <div className={Styles.reelStats}>
                <span>{reel.likes} Likes</span>
                <span>{reel.comments} Comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reel;
