import React, { useEffect, useState } from "react";
import Storyreels from "./Storyreels";
import "./css/feed.css";
import MessageSender from "./MessageSender";

const Feed = () => {
  return (
    <>
      <div className="feed">
        <Storyreels />
      </div>
      <MessageSender />
    </>
  );
};

export default Feed;
