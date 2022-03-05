import React, { useState } from "react";
import Comments from "../../components/Comments/Comments";
import PostCard from "../../components/PostCard/PostCard";
import { ShowContext } from "../../components/showContext";
import Login from "./Login/Login";
import "./styles.css";
const Home = () => {
  const [showComments, toggleComments] = useState(false);
  return (
    <ShowContext.Provider value={[showComments, toggleComments]}>
      <div>
        {showComments ? <Comments /> : null}
        <div className="header"></div>
        <div className="wrapper">
          <div className="left-side">
            <PostCard />
            <PostCard />
          </div>
          <div>side</div>
        </div>
      </div>
    </ShowContext.Provider>
  );
};

export default Home;
