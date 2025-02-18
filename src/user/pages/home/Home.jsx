import React, { useState } from 'react'
import Styles from './home.module.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Suggestions from '../../components/suggetions/Suggetions';
import Post from '../../components/post/Post';


const Home = () => {
  // Sample data for posts with Unsplash image URLs
  const [posts, setPosts] = useState([
    { 
      id: 1, 
      user: 'Designer_1', 
      profilePic: 'https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg?w=300', // Unsplash profile pic

      image: 'https://chiedesign.in/wp-content/uploads/2022/05/Luxury-Interior-Design-Living-Room-980x635.jpg', // Unsplash image
      caption: 'Amazing design! #creative', 
      likes: 120, 
      comments: 5 
    },
    { 
      id: 2, 
      user: 'Designer_2', 
      profilePic: 'https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg?w=300', // Unsplash profile pic

      image: 'https://chiedesign.in/wp-content/uploads/2022/05/Luxury-Interior-Design-Living-Room-980x635.jpg', // Unsplash image
      caption: 'Check out my new reel! #design', 
      likes: 250, 
      comments: 10 
    },
    { 
      id: 3, 
      profilePic:'https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg?w=300',
      user: 'Designer_3', 
      image: 'https://chiedesign.in/wp-content/uploads/2022/05/Luxury-Interior-Design-Living-Room-980x635.jpg', // Unsplash image
      caption: 'Designs are my passion! #artwork', 
      likes: 300, 
      comments: 12 
    },
    { 
        id: 4, 
        profilePic:'https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg?w=300',
        user: 'Designer_4', 
        image: 'https://chiedesign.in/wp-content/uploads/2022/05/Luxury-Interior-Design-Living-Room-980x635.jpg', // Unsplash image
        caption: 'Designs are my passion! #artwork', 
        likes: 300, 
        comments: 12 
      }

  ]);

  // Sample data for suggestions with Unsplash profile images
  const [suggestions, setSuggestions] = useState([
    { 
      id: 1, 
      username: 'Designer_1', 
      profilePic: 'https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg?w=300', // Unsplash profile pic
      followers: 150 
    },
    { 
      id: 2, 
      username: 'Designer_2', 
      profilePic: 'https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg?w=300', // Unsplash profile pic
      followers: 200 
    },
    { 
      id: 3, 
      username: 'Designer_3', 
      profilePic: 'https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg?w=300', // Unsplash profile pic
      followers: 350 
    },
    { 
        id: 4, 
        username: 'Designer_4', 
        profilePic: 'https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg?w=300', // Unsplash profile pic
        followers: 350 
      }
  ]);

  return (
    <div className={Styles.home}>
      <div className={Styles.sidebar}>
        <Sidebar />
      </div>
      <div className={Styles.posts}>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      <div className={Styles.mainContent}>
        <div className={Styles.suggestions}>
          <Suggestions suggestions={suggestions} />
        </div>

       
      </div>
    </div>
  )
}

export default Home;
