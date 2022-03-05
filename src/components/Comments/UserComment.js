import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
const UserComment = (item) => {
  const [comment, setComment] = useState(null);
  console.log("item", item.item);
  useEffect(() => {
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_BE}/comment/${item.item}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("my_user_token")}`
      }
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setComment(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="comment-line">
      {comment ? (
        <>
          {/* <img src={profile} className="avatar" /> */}
          {comment.username}
          <span className="user-comment">{comment.content}</span>
        </>
      ) : null}
    </div>
  );
};

export default UserComment;
