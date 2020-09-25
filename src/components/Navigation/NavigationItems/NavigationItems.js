import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">
        <strong>All Post</strong>
      </NavigationItem>
      <NavigationItem link="/new-post">
        <strong>New Post</strong>
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;
