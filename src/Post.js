import React, { useEffect, useState } from "react";
import Feed from "./Feed";
import Postmessages from "./Postmessages";
import bg4 from "./assets/bg4.jpg";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (doc) => {
      setPosts(
        doc.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);

  console.log(posts);

  return (
    <div className="post">
      <Feed />

      {posts.map(({ data, id }) => (
        <Postmessages
          key={id}
          photoURL={data?.photoURL}
          image={data?.image}
          username={data?.username}
          timestamp={new Date(
            data?.timestamp?.seconds * 1000
          ).toLocaleTimeString()}
          message={data?.message}
        />
      ))}
    </div>
  );
};

export default Post;
