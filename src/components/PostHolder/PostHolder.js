import React from "react";

import classes from "./PostHolder.module.css";

import PostData from './PostData/PostData';

const postHolder = (props) => {
  return (
    <div className={classes.PostHolder}>
        <PostData data = {props.data} />
        <div className={classes.PostAction}>
          <button>Upvote</button>
          <button onClick={props.clicked}>Comment</button>
        </div>
    </div>
  );
};

export default postHolder;
