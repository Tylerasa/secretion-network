import React from "react";
import PostCard from "../../components/PostCard/PostCard";
import "./styles.css";
const Home = () => {
  return (
    <div className="wrapper">
      <div className="left-side">
        <PostCard />
      </div>
      <div>side</div>
    </div>
  );
};

export default Home;
