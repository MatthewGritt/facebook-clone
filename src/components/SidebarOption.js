import React from "react";
import { useStateValue } from "../StateProvider";

function SidebarOption({ Icon, title }) {
  const [{ user }] = useStateValue();
  return (
    <div className="sidebarOption">
      <Icon src={user.photoURL} />
      <p>{title}</p>
    </div>
  );
}

export default SidebarOption;
