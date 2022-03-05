import axios from "axios";
import React, { useEffect, useState } from "react";
import Comments from "../../components/Comments/Comments";
import PostCard from "../../components/PostCard/PostCard";
import { ShowContext } from "../../components/showContext";
import profile from "../../assets/images/profile.jpg";
import "./styles.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()
  const [showComments, toggleComments] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_BE}/posts`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("my_user_token")}`
      }
    };

    axios(config)
      .then(function (response) {
        setPosts(response.data);
      })
      .catch(function (error) {
          navigate("/")
        console.log(error);
      });
  }, []);
  return (
    <ShowContext.Provider value={[showComments, toggleComments]}>
      <div>
        {showComments.status ? <Comments /> : null}
        <div className="header"></div>
        <div className="wrapper">
          <div className="left-side">
            {posts.map((ele, i) => {
              return <PostCard post={ele} key={i} />;
            })}
          </div>
          <div className="right-side">
            <div className="post-card-header">
              <img src={profile} className="avatar" />
              {/* {showComments.post.username} */}
            </div>
          </div>
        </div>
      </div>
    </ShowContext.Provider>
  );
};

export default Home;
