import React, { useState } from 'react';
import Styles from './Post.module.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const generateFakeComments = () => [
  { id: 1, user: 'user1', text: 'Nice shot!', likes: 2, replies: [] },
  { id: 2, user: 'user1', text: 'Nice shot!', likes: 2, replies: [] },
  { id: 3, user: 'user1', text: 'Nice shot!', likes: 2, replies: [] },
  { id: 4, user: 'user1', text: 'Nice shot!', likes: 2, replies: [] },


 
];

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(generateFakeComments());
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [newReply, setNewReply] = useState('');

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const toggleCommentSection = () => {
    setShowComments(!showComments);
  };

  const likeComment = (commentId) => {
    setComments(comments.map(comment =>
      comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
    ));
  };

  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, { id: comments.length + 1, user: 'current_user', text: newComment, likes: 0, replies: [] }]);
      setNewComment('');
    }
  };

  const addReply = (commentId) => {
    if (newReply.trim() !== '') {
      setComments(comments.map(comment =>
        comment.id === commentId ? { ...comment, replies: [...comment.replies, { id: Date.now(), user: 'current_user', text: newReply, likes: 0, replies: [] }] } : comment
      ));
      setNewReply('');
      setReplyingTo(null);
    }
  };

  return (
    <div className={Styles.post}>
      <div className={Styles.postHeader}>
        <div className={Styles.userInfo}>
          <img className={Styles.profilePic} src={post.profilePic} alt="Profile" />
          <span className={Styles.username}>{post.user}</span>
        </div>
        <MoreHorizIcon className={Styles.moreIcon} />
      </div>

      <img className={Styles.postImage} src={post.image} alt="Post" />

      <div className={Styles.postActions}>
        <div className={Styles.leftActions}>
          <button className={Styles.likeButton} onClick={toggleLike}>
            {liked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
          </button>
          <button className={Styles.commentButton} onClick={toggleCommentSection}>
            <ChatBubbleOutlineIcon/>
          </button>
          <button className={Styles.shareButton}>
            <SendIcon/>
          </button>
        </div>
      </div>

      <div className={Styles.likeCount}>{likes} likes</div>
      <div className={Styles.caption}>
        <span className={Styles.username}>{post.user}</span> {post.caption}
      </div>

      {showComments && (
        <div className={Styles.commentSection}>
          {comments.map(comment => (
            <div key={comment.id} className={Styles.comment}>
              <span className={Styles.commentUser}>{comment.user}:</span> {comment.text}
              <button className={Styles.likeCommentButton} onClick={() => likeComment(comment.id)}>
                {comment.likes > 0 ? <FavoriteIcon/> : <FavoriteBorderIcon/>} {comment.likes}
              </button>
              <button className={Styles.replyButton} onClick={() => setReplyingTo(comment.id)}>Reply</button>
              {replyingTo === comment.id && (
                <div className={Styles.addReply}>
                  <input 
                    type="text" 
                    placeholder="Write a reply..." 
                    value={newReply} 
                    onChange={(e) => setNewReply(e.target.value)}
                  />
                  <button onClick={() => addReply(comment.id)}>Reply</button>
                </div>
              )}
              {comment.replies && comment.replies.map(reply => (
                <div key={reply.id} className={Styles.reply}>
                  <span className={Styles.commentUser}>{reply.user}:</span> {reply.text}
                  <button className={Styles.likeCommentButton} onClick={() => likeComment(reply.id)}>
                    {reply.likes > 0 ? <FavoriteIcon/> : <FavoriteBorderIcon/>} {reply.likes}
                  </button>
                </div>
              ))}
            </div>
          ))}
          <div className={Styles.addComment}>
            <input 
              type="text" 
              placeholder="Add a comment..." 
              value={newComment} 
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={addComment} className={Styles.postCommentButton}>Post</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;