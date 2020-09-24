import React from "react";
import classes from "./NavigationBar.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";

const navigationBar = () => (
  <header className={classes.NavigationBar}>
    <NavigationItems />
  </header>
);

export default navigationBar;
