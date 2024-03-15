import { Avatar } from "@mui/material";
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./css/postmessages.css";
import PostImg from "./assets/bg4.jpg";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

const Postmessages = ({ photoURL, image, username, timestamp, message }) => {
  return (
    <div className="postmessages">
      <div className="postmessages__top">
        <div className="postmessages__topLeft">
          <Avatar src={photoURL} />
          <div className="postmessages__name">
            <h6>{username}</h6>
            <div className="postmessages__time">
              <p>{timestamp}</p>
              <LanguageIcon />
            </div>
          </div>
        </div>
        <div className="postmessages__topRight">
          <MoreHorizIcon />
        </div>
      </div>
      <div className="postmessages__middle">
        <p>{message}</p>
        {image && <img src={image} alt="postImg" style={{ width: "100%" }} />}
      </div>
      <hr />
      <div className="postmessages__last">
        <div className="postmessages__optiopns">
          <ThumbUpOffAltIcon />
          <p>Like</p>
        </div>
        <div className="postmessages__optiopns">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="postmessages__optiopns">
          <ShareIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Postmessages;
