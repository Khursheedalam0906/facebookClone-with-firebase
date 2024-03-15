import { useContext, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Post from "./Post";
import Rightsidebar from "./Rightsidebar";
import Sidebar from "./Sidebar";
import { StateContext } from "./StateProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useContext(StateContext);
  // console.log("user", user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: {
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
          },
        });
      } else {
        console.log("something wrong in auth statechanged");
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <div className="App">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Post />
            <Rightsidebar />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
