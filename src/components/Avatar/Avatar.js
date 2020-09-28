import React from "react";

import classes from "./Avatar.module.css";
import Avatar from "../../assets/img/avatar.jpg";

const avatar = (props) => (
  <div className={classes.Avatar}>
    <img src={Avatar} alt="Avatar"></img>
  </div>
);

export default avatar;
