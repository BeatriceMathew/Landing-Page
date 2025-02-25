import React, { useState } from "react";
import Styles from "./Reel.module.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
} from "@mui/icons-material";
import {
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";

const Reel = () => {
  const [reels, setReels] = useState([
    {
      id: 1,
      Designer: "User_1",
      profilePic:
        "https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg?w=300",
      video:
        "https://videos.pexels.com/video-files/6832166/6832166-sd_506_960_25fps.mp4",
      caption: "Amazing landscape! #nature #travel",
      likes: 120,
      comments: [
        {
          id: 1,
          user: "user1",
          text: "Beautiful view!",
          likes: 2,
          replies: [],
          replying: false,
          newReply: "",
        },
        {
          id: 2,
          user: "user2",
          text: "Wow, amazing!",
          likes: 3,
          replies: [],
          replying: false,
          newReply: "",
        },
      ],
      liked: false,
      showCommentBox: false,
      newComment: "",
    },
    {
      id: 2,
      Designer: "User_2",
      profilePic:
        "https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg?w=300",
      video:
        "https://videos.pexels.com/video-files/6832166/6832166-sd_506_960_25fps.mp4",
      caption: "Amazing landscape! #nature #travel",
      likes: 120,
      comments: [
        {
          id: 1,
          user: "user1",
          text: "Beautiful view!",
          likes: 2,
          replies: [],
          replying: false,
          newReply: "",
        },
        {
          id: 2,
          user: "user2",
          text: "Wow, amazing!",
          likes: 3,
          replies: [],
          replying: false,
          newReply: "",
        },
      ],
      liked: false,
      showCommentBox: false,
      newComment: "",
    },
    {
      id: 3,
      Designer: "User_3",
      profilePic:
        "https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg",
      video:
        "https://videos.pexels.com/video-files/6832166/6832166-sd_506_960_25fps.mp4",
      caption: "Amazing landscape! #nature #travel",
      likes: 120,
      comments: [
        {
          id: 1,
          user: "user1",
          text: "Beautiful view!",
          likes: 2,
          replies: [],
          replying: false,
          newReply: "",
        },
        {
          id: 2,
          user: "user2",
          text: "Wow, amazing!",
          likes: 3,
          replies: [],
          replying: false,
          newReply: "",
        },
      ],
      liked: false,
      showCommentBox: false,
      newComment: "",
    },
  ]);

  const toggleLike = (id) => {
    setReels((prevReels) =>
      prevReels.map((reel) =>
        reel.id === id
          ? {
              ...reel,
              liked: !reel.liked,
              likes: reel.liked ? reel.likes - 1 : reel.likes + 1,
            }
          : reel
      )
    );
  };

  const toggleCommentBox = (id) => {
    setReels((prevReels) =>
      prevReels.map((reel) =>
        reel.id === id
          ? { ...reel, showCommentBox: !reel.showCommentBox }
          : reel
      )
    );
  };

  const addComment = (id) => {
    setReels((prevReels) =>
      prevReels.map((reel) =>
        reel.id === id && reel.newComment.trim() !== ""
          ? {
              ...reel,
              comments: [
                ...reel.comments,
                {
                  id: Date.now(),
                  user: "current_user",
                  text: reel.newComment,
                  likes: 0,
                  replies: [],
                  replying: false,
                  newReply: "",
                },
              ],
              newComment: "",
            }
          : reel
      )
    );
  };

  const addReply = (reelId, commentId) => {
    setReels((prevReels) =>
      prevReels.map((reel) =>
        reel.id === reelId
          ? {
              ...reel,
              comments: reel.comments.map((comment) =>
                comment.id === commentId && comment.newReply.trim() !== ""
                  ? {
                      ...comment,
                      replies: [
                        ...comment.replies,
                        {
                          id: Date.now(),
                          user: "current_user",
                          text: comment.newReply,
                          likes: 0,
                        },
                      ],
                      newReply: "",
                      replying: false,
                    }
                  : comment
              ),
            }
          : reel
      )
    );
  };

  return (
    <div className={Styles.reelsContainer}>
      <div className={Styles.sub}>
        <Sidebar />
      </div>
      <div className={Styles.reel}>
        {reels.map((reel) => (
          <div key={reel.id} className={Styles.Reel}>
            <div className={Styles.profile}>
              <img src={reel.profilePic} className={Styles.img} />
              <span className={Styles.name}>{reel.Designer}</span>
              <span className={Styles.caption}>{reel.caption}</span>
            </div>
            <div className={Styles.reelContent}>
              <video className={Styles.reelVideo}  autoPlay loop muted>
                <source src={reel.video} type="video/mp4" />
              </video>
              <div className={Styles.reelActions}>
                <button
                  className={`${Styles.likeButton} ${
                    reel.liked ? Styles.liked : ""
                  }`}
                  onClick={() => toggleLike(reel.id)}
                >
                  {reel.liked ? (
                    <Favorite style={{ color: "red" }} />
                  ) : (
                    <FavoriteBorder />
                  )}
                </button>
                <span className={Styles.likes}>{reel.likes}</span>
                <button
                  className={Styles.commentButton}
                  onClick={() => toggleCommentBox(reel.id)}
                >
                  <ChatBubbleOutline />
                </button>
              </div>
            </div>
            <Dialog
              open={reel.showCommentBox}
              onClose={() => toggleCommentBox(reel.id)}
              className={Styles.commentPopup}
            >
              <DialogTitle className={Styles.commentTitle}>
                Comments
              </DialogTitle>
              <DialogContent className={Styles.commentContent}>
                <div className={Styles.commentsList}>
                  {reel.comments.map((comment) => (
                    <div key={comment.id} className={Styles.comment}>
                      <strong>{comment.user}:</strong> {comment.text}
                      <IconButton
                        onClick={() =>
                          setReels((prevReels) =>
                            prevReels.map((r) =>
                              r.id === reel.id
                                ? {
                                    ...r,
                                    comments: r.comments.map((c) =>
                                      c.id === comment.id
                                        ? { ...c, replying: !c.replying }
                                        : c
                                    ),
                                  }
                                : r
                            )
                          )
                        }
                        className={Styles.replyButton}
                      >
                        Reply
                      </IconButton>
                      <IconButton className={Styles.likeButton}>
                        ❤️ {comment.likes}
                      </IconButton>
                      {comment.replying && (
                        <div className={Styles.replyBox}>
                          <TextField
                            fullWidth
                            placeholder="Write a reply..."
                            variant="outlined"
                            margin="dense"
                            value={comment.newReply}
                            onChange={(e) =>
                              setReels((prevReels) =>
                                prevReels.map((r) =>
                                  r.id === reel.id
                                    ? {
                                        ...r,
                                        comments: r.comments.map((c) =>
                                          c.id === comment.id
                                            ? { ...c, newReply: e.target.value }
                                            : c
                                        ),
                                      }
                                    : r
                                )
                              )
                            }
                          />
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => addReply(reel.id, comment.id)}
                          >
                            Reply
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <TextField
                  fullWidth
                  placeholder="Add a comment..."
                  variant="outlined"
                  margin="dense"
                  value={reel.newComment}
                  onChange={(e) =>
                    setReels((prevReels) =>
                      prevReels.map((r) =>
                        r.id === reel.id
                          ? { ...r, newComment: e.target.value }
                          : r
                      )
                    )
                  }
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => addComment(reel.id)}
                >
                  Post
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reel;
