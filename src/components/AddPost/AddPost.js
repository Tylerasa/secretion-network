import React, { useContext, useRef, useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import "./styles.css";
const AddPost = () => {
  const cardRef = useRef();
  const [clickState, setClickState] = useState(false);
  const [picture, setPicture] = useState(null);
  var picker = document.getElementsByTagName("input")[0];

  //   useEffect(() => {
  //     function handleClickOutside(event) {
  //       if (cardRef.current && !cardRef.current.contains(event.target)) {
  //         toggleComments({
  //           status: false,
  //           post: null
  //         });
  //       }
  //     }

  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [clickState, toggleComments]);
  useEffect(() => {
    if (picker) {
      picker.style.visibility = "hidden";
    }
  }, []);
  function getFile(file) {
    setPicture(file);
  }
  return (
    <div onClick={() => setClickState(!clickState)} className="comments-modal">
      <div ref={cardRef} className="comment-card">
        <div
          className="comment-img add-post"
          style={{
            background: picture ? `url(${picture.base64})` : null
          }}
        >
          {!picture ? (
            <FileBase64 style={{ visibility: "collapse" }} onDone={getFile} />
          ) : null}
          {/* click here to add a picture */}
        </div>
        <div className="comments-main">
          <form
            //    onSubmit={(e) => handleSubmit(e)}
            className="form"
          >
            <input
              //   onChange={(e) => setContent(e.target.value)}
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
