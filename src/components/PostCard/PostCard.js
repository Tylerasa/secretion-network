import React from "react";
// import CustomLoader from "../CustomLoader/CustomLoader";
import profile from "../../assets/images/profile.jpg";
import "./styles.css";
const PostCard = () => {
  return (
    <div className="post-card">
      {/* <CustomLoader /> */}
      <img src={profile} className="post-image" />
      <div>
        <span className="username">username </span>
        <span className="username">This is my post</span>
      </div>
    </div>
  );
};

export default PostCard;
