import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import EventIcon from "@material-ui/icons/Event";
import RestoreIcon from "@material-ui/icons/Restore";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const [{ user }] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarOption user Icon={Avatar} title={user.displayName} />
      <SidebarOption
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarOption Icon={PeopleIcon} title="Friends" />
      <SidebarOption Icon={SupervisedUserCircleIcon} title="Groups" />
      <SidebarOption Icon={StorefrontIcon} title="Marketplace" />
      <SidebarOption Icon={VideoLibraryIcon} title="Videos" />
      <SidebarOption Icon={EventIcon} title="Events" />
      <SidebarOption Icon={RestoreIcon} title="Memories" />
      <SidebarOption Icon={BookmarkIcon} title="Saved" />
      <SidebarOption Icon={ExpandMoreIcon} title="See more" />
    </div>
  );
}

export default Sidebar;
