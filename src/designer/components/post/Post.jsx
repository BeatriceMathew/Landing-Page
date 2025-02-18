import React, { useState } from 'react'
import Styles from './Post.module.scss'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className={Styles.post}>
      <div className={Styles.postHeader}>
        <img className={Styles.profilePic} src={post.profilePic} />
        <span className={Styles.username}>{post.user}</span>
      </div>

      <img className={Styles.postImage} src={post.image} alt="Post" />

      <div className={Styles.postActions}>
        <button className={Styles.likeButton} onClick={toggleLike}>
          {liked ? <FavoriteBorderIcon/>: <FavoriteIcon/>} ({likes})
        </button>
        <button className={Styles.commentButton}><ChatBubbleOutlineIcon/> ({post.comments})</button>
      </div>

      <div className={Styles.caption}>
        <span className={Styles.username}>{post.user}</span> {post.caption}
      </div>
    </div>
  );
};

export default Post;
