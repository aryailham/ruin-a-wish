import React, { useState, useEffect } from "react";
import PostHolder from "../../components/PostHolder/PostHolder";
import axios from "../../axios-connect";

const AllPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("useEffect fired!");

    axios
      .get("posts.json")
      .then((result) => {
        let fetchedData = posts;
        for (let key in result.data) {
          fetchedData.push({ ...result.data[key], id: key });
        }
        setPosts((posts) => fetchedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const allPost = posts.map((post) => {
    return (
      <div>
        id: {post.id} <br />
        text: {post.post}
      </div>
    );
  });

  console.log(posts);

  return (
    <div>
      <h1>test</h1>
      {allPost}
    </div>
  );
};

export default AllPost;
