import React from "react";

import classes from "./PostHolder.module.css";

import PostData from './PostData/PostData';

const postHolder = (props) => {
  return (
    <div className={classes.PostHolder}>
        <PostData data = {props.data} />
    </div>
  );
};

export default postHolder;
