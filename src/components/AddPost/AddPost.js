import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import FileBase64 from "react-file-base64";
import "./styles.css";
const AddPost = () => {
  const cardRef = useRef();
  const [clickState, setClickState] = useState(false);
  const [picture, setPicture] = useState(null);
  const [caption, setCaption] = useState("");
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickState]);
  function getFile(file) {
    var exp = /\d+/;
    if (file.size.match(exp)[0] > 100) {
      setShowError(true);
    } else {
      setShowError(false);
      setPicture(file);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var userId = localStorage.getItem("my_user_id");
    var data = JSON.stringify({
      caption,
      image: picture.base64
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BE}/posts/add/${userId}`,
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
          className="comment-img add-post"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            background: picture ? `url(${picture.base64})` : null
          }}
        >
          {showError && <p className="error">File must be less 100kb</p>}
          {!picture ? (
            <FileBase64 onDone={getFile} />
          ) : (
            <span onClick={() => setPicture(null)} className="remove-button">
              x
            </span>
          )}
        </div>

        <div className="comments-main">
          <form onSubmit={(e) => handleSubmit(e)} className="form">
            <input
              onChange={(e) => setCaption(e.target.value)}
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

export default AddPost;
