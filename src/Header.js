import React, { useContext, useState } from "react";
import "./css/header.css";
import Facebooklogo from "./assets/facebook.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import { Avatar, IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { StateContext } from "./StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

const Header = () => {
  const [{ user }, dispatch] = useContext(StateContext);

  return (
    <div className="header">
      <div className="header__left">
        <img src={Facebooklogo} alt="FacebookIcon" />
        <div className="header__search">
          <SearchIcon />
          <input type="search" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <IconButton>
            <HomeIcon />
          </IconButton>
        </div>
        <div className="header__option">
          <IconButton>
            <OndemandVideoIcon />
          </IconButton>
        </div>
        <div className="header__option">
          <IconButton>
            <PeopleAltOutlinedIcon />
          </IconButton>
        </div>
        <div className="header__option">
          <IconButton>
            <SportsEsportsOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="header__right">
        <IconButton onClick={() => signOut(auth)}>
          <Avatar src={`${user.photoURL}`} />
        </IconButton>
        <h5>{user.displayName}</h5>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
