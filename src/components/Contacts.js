import React from "react";
import "./Contacts.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SearchIcon from "@material-ui/icons/Search";
import Contact from "./Contact";

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__top">
        <div className="contacts__topLeft">
          <h2>Contacts</h2>
        </div>
        <div className="contacts__topRight">
          <SearchIcon />
          <MoreHorizIcon />
        </div>
      </div>

      <Contact
        name="Nigel Sears"
        src="https://avatars.dicebear.com/api/human/1.svg"
      />
      <Contact
        name="Emmy Tate"
        src="https://avatars.dicebear.com/api/human/8.svg"
      />
      <Contact
        name="Richard Rice"
        src="https://avatars.dicebear.com/api/human/4.svg"
      />
      <Contact
        name="Harold Hurst"
        src="https://avatars.dicebear.com/api/human/5.svg"
      />
      <Contact
        name="Emile Avila"
        src="https://avatars.dicebear.com/api/human/6.svg"
      />
      <Contact
        name="Derrick Barnard"
        src="https://avatars.dicebear.com/api/human/7.svg"
      />
      <Contact
        name="Michele Saunders"
        src="https://avatars.dicebear.com/api/human/10.svg"
      />
      <Contact
        name="Stacy Lane"
        src="https://avatars.dicebear.com/api/human/14.svg"
      />
    </div>
  );
}

export default Contacts;
