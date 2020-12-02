import { Avatar } from "@material-ui/core";
import React from "react";

function Comment({ name, reply, pic }) {
  return (
    <div className="comment">
      <Avatar src={pic} className="comment__pic" />
      <div className="comment__info">
        <h5>{name}</h5>
        <p>{reply}</p>
      </div>
    </div>
  );
}

export default Comment;
