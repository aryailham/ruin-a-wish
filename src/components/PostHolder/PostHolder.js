import React from "react";

import classes from "./PostHolder.module.css";
import Avatar from "../Avatar/Avatar";

const postHolder = (props) => {
  return (
    <div className={classes.PostHolder}>
      <div className={classes.Avatar}>
        <Avatar />
      </div>
      <h2>{props.data.post}</h2>
      <div className={classes.PostAction}>
        <button>Upvote</button>
        <button>Comment</button>
      </div>
    </div>
  );
};

export default postHolder;
