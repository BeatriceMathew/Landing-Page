import React, { useState } from 'react';
import Styles from './Explore.module.scss';
import Sidebar from '../../components/sidebar/Sidebar';

const Explore = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg',
      user: 'User_1',
      likes: 120,
    },
    {
      id: 2,
      image: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg',
      user: 'User_2',
      likes: 200,
    },
    {
      id: 3,
      image: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg',
      user: 'User_3',
      likes: 300,
    },
    {
      id: 4,
      image: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg',
      user: 'User_4',
      likes: 180,
    },
  ]);

  const [reels, setReels] = useState([
    {
      id: 1,
      video: 'https://videos.pexels.com/video-files/6832166/6832166-sd_506_960_25fps.mp4',
      user: 'User_1',
    },
    {
      id: 2,
      video: 'https://videos.pexels.com/video-files/6803592/6803592-sd_506_960_25fps.mp4',
      user: 'User_2',
    },
  ]);

  return (
    <div className={Styles.exploreContainer}>
        <Sidebar />
      <div className={Styles.content}>
        <div className={Styles.postsGrid}>
          {posts.map((post) => (
            <div key={post.id} className={Styles.post}>
              <img src={post.image} alt="Post" />
              <div className={Styles.overlay}>❤️ {post.likes}</div>
            </div>
          ))}
        </div>
        <div className={Styles.reelsSection}>
          {reels.map((reel) => (
            <div key={reel.id} className={Styles.reel}>
              <video autoPlay loop muted playsInline>
                <source src={reel.video} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
