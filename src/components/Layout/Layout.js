import React from "react";
import Aux from "../../hoc/Auxiliary";
import NavigationBar from "../Navigation/NavigationBar";

const Layout = (props) => {
  return (
    <Aux>
      <NavigationBar />
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
