import React, { useContext, useRef, useEffect, useState } from "react";
import "./styles.css";
import profile from "../../assets/images/profile.jpg";
import { ShowContext } from "../showContext";

const Comments = () => {
  const [showComments, toggleComments] = useContext(ShowContext);
  const [clickState, setClickState] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        toggleComments(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickState]);

  return (
    <div onClick={() => setClickState(!clickState)} className="comments-modal">
      <div ref={cardRef} className="comment-card">
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
            <input
              placeholder="say something..."
              className="form-input"
              type="text"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comments;
