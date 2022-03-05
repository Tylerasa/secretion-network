import React, { useContext, useRef, useEffect, useState } from "react";
import "./styles.css";
import profile from "../../assets/images/profile.jpg";
import { ShowContext } from "../showContext";
import UserComment from "./UserComment";

const Comments = () => {
  const [showComments, toggleComments] = useContext(ShowContext);
  const [clickState, setClickState] = useState(false);
  const [content, setContent] = useState("");
  const cardRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        toggleComments({
          status: false,
          post: null
        });
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickState, toggleComments]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      content
    });
    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BE}/posts/add-comment/${ele}/621fcf5bd7310d25814bb469`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("my_user_token")}`
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
            {showComments.post.username}
          </div>
          {showComments.post.comments.map((ele, i) => {
            return <UserComment key={i} item={ele} />;
          })}
          <form onSubmit={(e) => handleSubmit(e)} className="form">
            <input
              onChange={(e) => setContent(e.target.value)}
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
