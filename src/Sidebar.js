import React, { useContext } from "react";
import Sidebaroptions from "./Sidebaroptions";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Friends from "./assets/friend.png";
import Memories from "./assets/memories.png";
import AdsManager from "./assets/adsmanager.png";
import Saved from "./assets/saved.png";
import Group from "./assets/groups.png";
import Video from "./assets/video.png";
import Marketplace from "./assets/shopping-store.png";
import "./css/sidebar.css";
import { StateContext, StateProvider } from "./StateProvider";

const Sidebar = () => {
  const [{ user }, dispatch] = useContext(StateContext);
  return (
    <div className="sidebar">
      <Sidebaroptions src={`${user.photoURL}`} title={user.displayName} />
      <Sidebaroptions src={Friends} title={"Friends"} />
      <Sidebaroptions src={Memories} title={"Memories"} />
      <Sidebaroptions src={AdsManager} title={"Ads Manager"} />
      <Sidebaroptions src={Saved} title={"Saved"} />
      <Sidebaroptions src={Group} title={"Groups"} />
      <Sidebaroptions src={Video} title={"Video"} />
      <Sidebaroptions src={Marketplace} title={"MarketPlace"} />
      <Sidebaroptions Icon={KeyboardArrowDownIcon} title={"See More"} />
      //
      <Sidebaroptions src={"hi"} title={"Khursheed Alam"} />
      <Sidebaroptions src={Friends} title={"Friends"} />
      <Sidebaroptions src={Memories} title={"Memories"} />
      <Sidebaroptions src={AdsManager} title={"Ads Manager"} />
      <Sidebaroptions src={Saved} title={"Saved"} />
      <Sidebaroptions src={Group} title={"Groups"} />
      <Sidebaroptions src={Video} title={"Video"} />
      <Sidebaroptions src={Marketplace} title={"MarketPlace"} />
      <Sidebaroptions Icon={KeyboardArrowDownIcon} title={"See More"} />
      //
      <Sidebaroptions src={"hi"} title={"Khursheed Alam"} />
      <Sidebaroptions src={Friends} title={"Friends"} />
      <Sidebaroptions src={Memories} title={"Memories"} />
      <Sidebaroptions src={AdsManager} title={"Ads Manager"} />
      <Sidebaroptions src={Saved} title={"Saved"} />
      <Sidebaroptions src={Group} title={"Groups"} />
      <Sidebaroptions src={Video} title={"Video"} />
      <Sidebaroptions src={Marketplace} title={"MarketPlace"} />
      <Sidebaroptions Icon={KeyboardArrowDownIcon} title={"See More"} />
    </div>
  );
};

export default Sidebar;
