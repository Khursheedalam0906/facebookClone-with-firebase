import { Avatar } from "@mui/material";
import React from "react";
import "./css/sidebaroptions.css";

const Sidebaroptions = ({ src, Icon, title }) => {
  return (
    <div className="sidebaroptions">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  );
};

export default Sidebaroptions;
