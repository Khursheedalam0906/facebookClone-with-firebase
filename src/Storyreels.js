import { Avatar } from "@mui/material";
import React from "react";
import Bg1 from "./assets/bg1.jpg";
import "./css/storyreels.css";
import Bg2 from "./assets/bg2.jpg";
import Bg3 from "./assets/bg3.jpg";
import Bg4 from "./assets/bg4.jpg";

const Storyreels = () => {
  return (
    <div className="story">
      <div
        className="storyreels"
        style={{
          backgroundImage: `url(${Bg1})`,
        }}
      >
        <Avatar />
        <h4>Khursheed Alam</h4>
      </div>
      <div
        className="storyreels"
        style={{
          backgroundImage: `url(${Bg2})`,
        }}
      >
        <Avatar />
        <h4>Sohan</h4>
      </div>
      <div className="storyreels" style={{ backgroundImage: `url(${Bg3})` }}>
        <Avatar />
        <h4>Raghiv</h4>
      </div>
      <div className="storyreels" style={{ backgroundImage: `url(${Bg4})` }}>
        <Avatar />
        <h4>Bablu</h4>
      </div>
    </div>
  );
};

export default Storyreels;
