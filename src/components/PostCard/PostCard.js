import React, { useContext } from "react";
// import CustomLoader from "../CustomLoader/CustomLoader";
import profile from "../../assets/images/profile.jpg";
import { ShowContext } from "../../components/showContext";

import "./styles.css";
const PostCard = ({ post }) => {
  const [showComments, toggleComments] = useContext(ShowContext);

  const handleClick = () => {
    toggleComments(true);
  };
  return (
    <div className="post-card">
      <div className="post-card-header">
        <img src={profile} className="avatar" />
        {post.username}
      </div>
      <img src={post.image} alt={post.caption} className="post-image" />
      <div className="post-card-body">
        <span className="username">{post.username} </span>
        <span className="post-caption">{post.caption}</span>
        {post.comments.length > 0 ? (
          <p onClick={handleClick} className="view-comments">
            View all comments
          </p>
        ) : (
          <p onClick={handleClick} className="view-comments">
            No posts yet
          </p>
        )}
      </div>
    </div>
  );
};

export default PostCard;
