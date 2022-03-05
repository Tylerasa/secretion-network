import React, { useState, createContext, useContext } from "react";
import Comments from "../../components/Comments/Comments";
import PostCard from "../../components/PostCard/PostCard";
import { ShowContext } from "../../components/showContext";
import "./styles.css";
const Home = () => {
 
  const { showComments } = useContext(ShowContext);
  return (
    <ShowContext.Provider value={showComments}>
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
