import React from "react";
import PostCard from "../../components/PostCard/PostCard";
import "./styles.css";
const Home = () => {
  return (
    <div>
      <div className="header"></div>
      <div className="wrapper">
        <div className="left-side">
          <PostCard />
          <PostCard />
        </div>
        <div>side</div>
      </div>
    </div>
  );
};

export default Home;
