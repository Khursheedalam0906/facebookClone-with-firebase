import React from "react";
import "./css/rightsidebar.css";
import {
  MoreHoriz,
  Notifications,
  Search,
  Videocam,
  VolumeUp,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Rightsidebar = () => {
  return (
    <div className="widget">
      <div className="widget__header">
        <div className="widget__headerLeft">
          <h4>Your Pages</h4>
        </div>
        <MoreHoriz />
      </div>
      <div className="widget__body">
        <div className="widget__bodyoptions">
          <Avatar src="" />
          <h4>Khursheed Alam</h4>
        </div>
        <div className="widget__bodyoptions">
          <Notifications />
          <p>1 notifications</p>
        </div>
        <div className="widget__bodyoptions">
          <VolumeUp />
          <p>Create promotions</p>
        </div>
        <br />
        <hr />
        <div className="widget__header">
          <div className="widget__headerLeft">
            <h4>Contact</h4>
          </div>
          <div className="widget__headerRight">
            <Videocam />
            <Search />
            <MoreHoriz />
          </div>
        </div>
        <div className="widget__body">
          <div className="widget__bodyoptions">
            <Avatar src="" />
            <h4>Sonu</h4>
          </div>
          <div className="widget__bodyoptions">
            <Avatar src="" />
            <h4>Sipra</h4>
          </div>
          <div className="widget__bodyoptions">
            <Avatar src="" />
            <h4>Shaquib</h4>
          </div>
          <div className="widget__bodyoptions">
            <Avatar src="" />
            <h4>Rohan</h4>
          </div>
          <div className="widget__bodyoptions">
            <Avatar src="" />
            <h4>Sohan</h4>
          </div>
          <div className="widget__bodyoptions">
            <Avatar src="" />
            <h4>Rohan</h4>
          </div>
          <div className="widget__bodyoptions">
            <Avatar src="" />
            <h4>Tohan</h4>
          </div>
          <div className="widget__bodyoptions">
            <Avatar src="" />
            <h4>Kohan</h4>
          </div>
          <div className="widget__bodyoptions">
            <Avatar src="" />
            <h4>Mojammil</h4>
          </div>
          <div className="widget__bodyoptions">
            <Avatar src="" />
            <h4>Shami</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightsidebar;
