import React, { useContext, useRef, useEffect, useState } from "react";
import './styles.css'
const AddPost = () => {
  const cardRef = useRef();
  const [clickState, setClickState] = useState(false);

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
  return (
    <div onClick={() => setClickState(!clickState)} className="comments-modal">
      <div ref={cardRef} className="comment-card">
        <div
          className="comment-img add-post"
        //   style={{
        //     background: `url(${profile})`,
        //     backgroundRepeat: "no-repeat",
        //     backgroundPosition: "center",
        //     backgroundSize: "cover"
        //   }}

        >
          click here to add a picture
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
