import { Avatar } from "@material-ui/core";
import React from "react";

function Contact({ src, name }) {
  return (
    <div className="contact">
      <Avatar src={src} className="contact__pic" />
      <p>{name}</p>
    </div>
  );
}

export default Contact;
