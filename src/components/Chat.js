import React, { useEffect } from "react";
import { useState } from "react";
import "./Chat.css";
import db from "../firebase";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Chat() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })),
        );
      });
  }, []);

  return (
    <div className="chat">
      <div className="chat__inner">
        <MessageSender />
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            name={post.data.username}
            timestamp={post.data.timestamp}
            message={post.data.message}
            pic={post.data.profilePic}
            image={post.data.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Chat;
