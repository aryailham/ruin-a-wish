import React, { useState, useEffect } from "react";
import PostHolder from "../../components/PostHolder/PostHolder";
import axios from "../../axios-connect";
import classes from "./AllPost.module.css";

const AllPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("useEffect fired!");

    axios
      .get("posts.json")
      .then((result) => {
        let fetchedData = [];
        for (let key in result.data) {
          fetchedData.push({ ...result.data[key], id: key });
        }
        // setPosts((prevPosts) => {
        //   return {
        //     ...prevPosts,
        //     fetchedData,
        //   };
        // });
        setPosts((posts) => posts.concat(fetchedData));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onCommentClickHandler = (key) => {
    console.log(key)

  }
  const allPost = posts.map((post) => {
    return <PostHolder data={post} key={post.id} clicked={() => onCommentClickHandler(post.id)} />;
  });


  return <div className={classes.AllPost}>{allPost.reverse()}</div>;
};

export default AllPost;
