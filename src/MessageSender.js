import { Avatar, IconButton, Modal } from "@mui/material";
import React, { useContext, useState } from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import "./css/messagesender.css";
import { Close, InsertEmoticon } from "@mui/icons-material";
import { StateContext } from "./StateProvider";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "./firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const MessageSender = () => {
  const [open, setOpen] = useState(false);
  const [{ user }, dispatch] = useContext(StateContext);

  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      setImage("");
    }
  };

  const uploadFilewithClick = () => {
    document.getElementById("imageFile").click();
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (image === "") {
      addDoc(collection(db, "posts"), {
        message: message,
        username: user.displayName,
        photoURL: user.photoURL,
        timestamp: serverTimestamp(),
      });
      handleClose();
      setImage(null);
      setMessage("");
    } else {
      const storageRef = ref(storage, `images/${image.name}-${new Date()}`);
      uploadBytes(storageRef, image).then((snapshot) => {
        // const progress = Math.round(
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // );
        setProgress(progress);
        getDownloadURL(storageRef).then((downloadURL) => {
          console.log("File available at", downloadURL);
          addDoc(collection(db, "posts"), {
            message: message,
            username: user.displayName,
            photoURL: user.photoURL,
            image: downloadURL,
            timestamp: serverTimestamp(),
          });
          handleClose();
          setImage(null);
          setMessage("");
        });
      });
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="modal__pop">
          <form>
            <div className="modalHeading">
              <h3>Create Post</h3>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </div>
            <div className="modalHeader__top">
              <Avatar src={`${user.photoURL}`} />
              <h5>{user.displayName}</h5>
            </div>
            <div className="modalBody">
              <textarea
                rows="5"
                placeholder="what's on your mind Mahabeer ?"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="modalFooter">
              <div className="modalFooterLeft">
                {image ? `${image.name}` : <h4>Add to your post</h4>}
              </div>
              <div className="modalFooterRight">
                <IconButton onClick={uploadFilewithClick}>
                  <PhotoLibraryIcon
                    fontSize="large"
                    style={{ color: "lightgreen" }}
                  />
                </IconButton>
                <input
                  type="file"
                  id="imageFile"
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
                <IconButton>
                  <VideoCallIcon fontSize="large" style={{ color: "red" }} />
                </IconButton>
                <IconButton>
                  <InsertEmoticon
                    fontSize="large"
                    style={{ color: "orange" }}
                  />
                </IconButton>
              </div>
            </div>
            {progress && (
              <progress
                value="20"
                max="100"
                style={{ width: "100%", marginBottom: 15 }}
              />
            )}
            <input
              type="submit"
              className="post__submit"
              value="Post"
              onClick={handleUpload}
            />
          </form>
        </div>
      </Modal>
      <div className="messagesender">
        <div className="messagesender__top">
          <Avatar />
          <form>
            <input
              type="text"
              placeholder="What's on your mind khursheed?"
              onClick={handleOpen}
            />
          </form>
        </div>
        <div className="messagesender__bottom">
          <div className="messengerOptions">
            <VideoCallIcon style={{ color: "red" }} fontSize="large" />
            <p>Live Video</p>
          </div>
          <div className="messengerOptions">
            <PhotoLibraryIcon
              style={{ color: "lightgreen" }}
              fontSize="large"
            />
            <p>Photo/Video</p>
          </div>
          <div className="messengerOptions">
            <EmojiEmotionsIcon style={{ color: "orange" }} fontSize="large" />
            <p>Feeling/Activity</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageSender;
