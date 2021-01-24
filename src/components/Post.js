import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Post.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ScreenShareOutlinedIcon from "@material-ui/icons/ScreenShareOutlined";
import Comment from "./Comment";
import db from "../firebase";
import firebase from "firebase";
import { useStateValue } from "../StateProvider";

function Post({ id, name, timestamp, message, pic, image }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("posts")
      .doc(id)
      .collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setComments(snapshot.docs.map((doc) => doc.data()));
      });
  }, [id]);

  const setReply = (e) => {
    e.preventDefault();

    if (text.length > 0) {
      db.collection("posts").doc(id).collection("comments").add({
        message: text,
        name: user.displayName,
        profilePic: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setText("");
  };
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__topLeft">
          <Avatar src={pic} />
          <div className="post__topInfo">
            <h3>{name}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>
        <div className="post__topRight">
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      <p className="post__message">{message}</p>
      <img className="post__pic" src={image} alt="" />
      <div className="post__icons">
        <div className="post__icon">
          <ThumbUpOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="post__icon">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__icon">
          <ScreenShareOutlinedIcon />
          <p>Share</p>
        </div>
      </div>
      <form className="post__comment">
        <Avatar src={user.photoURL} className="post__commentPic" />
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
          type="text"
        />
        <button onClick={setReply}>submit</button>
      </form>
      <div className="post__comments">
        {comments.map((comment) => (
          <Comment
            name={comment.name}
            reply={comment.message}
            pic={comment.profilePic}
          />
        ))}
        {/* <Comment name="John Smith" reply="This is an awesome comment" />
        <Comment name="John Smith" reply="This is an awesome comment" />
        <Comment name="John Smith" reply="This is an awesome comment" />
        <Comment name="John Smith" reply="This is an awesome comment" /> */}
      </div>
    </div>
  );
}

export default Post;
