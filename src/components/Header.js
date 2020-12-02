import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          alt=""
        />
        <div className="header__leftInput">
          <SearchIcon fontSize="large" />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header__center">
        <HomeIcon fontSize="large" style={{ color: "rgb(61, 119, 235)" }} />
        <PeopleOutlineIcon fontSize="large" />
        <SubscriptionsOutlinedIcon fontSize="large" />
        <StorefrontIcon fontSize="large" />
        <SupervisedUserCircleIcon fontSize="large" />
      </div>
      <div className="header__right">
        <div className="header__rightUser">
          <Avatar src={user.photoURL} className="header__rightUserPic" />
          <h3>{user.displayName}</h3>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
