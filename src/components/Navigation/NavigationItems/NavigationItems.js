import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Items from "./NavigationItem/NavigationItem";

const navigationItems = () => {
  return (
    <Aux>
      <navigationItems link="/">All Post</navigationItems>
      <navigationItems link="/new-post">New Post</navigationItems>
    </Aux>
  );
};

export default navigationItems;
