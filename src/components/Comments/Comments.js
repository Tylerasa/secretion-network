import React from "react";
import "./styles.css";
import profile from "../../assets/images/profile.jpg";

const Comments = () => {
  return (
    <div className="comments-modal">
      <div className="comment-card">
        <div
          className="comment-img"
          style={{
            background: `url(${profile})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
        <div className="comments-main">
          <div className="post-card-header">
            <img src={profile} className="avatar" />
            username
          </div>
          <div className="comment-line">
            <img src={profile} className="avatar" />
            username<span className="user-comment">this is a comment</span>
          </div>
          <div className="comment-line">
            <img src={profile} className="avatar" />
            username
          </div>
          <form className="form">
            <input placeholder="say something..." className="form-input" type="text" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comments;
