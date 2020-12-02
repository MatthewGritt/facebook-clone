import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import db from "../firebase";
import firebase from "firebase";
import { useStateValue } from "../StateProvider";

function MessageSender() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }] = useStateValue();

  const setPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: text,
      image: imageUrl,
      username: user.displayName,
      profilePic: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setText("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <form className="messageSender__top">
        <Avatar src={user.photoURL} className="messageSender__pic" />
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="messageSender__topInput1"
          placeholder={`What's on your mind ${user.displayName.split(" ")[0]}?`}
          type="text"
        />
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="messageSender__topInput2"
          placeholder="imageUrl (optional)"
          type="text"
        />
        <button onClick={setPost} type="submit">
          submit
        </button>
      </form>
      <div className="messageSender__bottom">
        <div className="messageSender__bottomOption">
          <VideocamIcon style={{ color: "red" }} />
          <p>Live Video</p>
        </div>
        <div className="messageSender__bottomOption">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <p>Photo/Video</p>
        </div>
        <div className="messageSender__bottomOption">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <p>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
