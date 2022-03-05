import React, { useContext } from "react";
// import CustomLoader from "../CustomLoader/CustomLoader";
import profile from "../../assets/images/profile.jpg";
import { ShowContext } from "../../components/showContext";

import "./styles.css";
const PostCard = () => {
  const { toggleComments } = useContext(ShowContext);

  const handleClick = () => {
    console.log("clicked");
    toggleComments(true);
  };
  return (
    <div className="post-card">
      <div className="post-card-header">
        <img src={profile} className="avatar" />
        username
      </div>
      <img src={profile} className="post-image" />
      <div className="post-card-body">
        <span className="username">username </span>
        <span className="post-caption">This is my post</span>
        <p onClick={handleClick} className="view-comments">
          View all comments
        </p>
      </div>
    </div>
  );
};

export default PostCard;
