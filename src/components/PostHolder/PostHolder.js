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
        <div>
          <p>Upvote</p>
        </div>
        <div>
          <p>Comment</p>
        </div>
      </div>
    </div>
  );
};

export default postHolder;
