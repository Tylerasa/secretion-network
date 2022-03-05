import React, { useState, createContext } from "react";
import Comments from "../../components/Comments/Comments";
import PostCard from "../../components/PostCard/PostCard";
import "./styles.css";
const Home = () => {
  const [showComments, toggleComments] = useState(false);
  const ShowContext = createContext()
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
