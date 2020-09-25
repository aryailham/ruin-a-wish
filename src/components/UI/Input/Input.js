import React from "react";
import Aux from "../../../hoc/Auxiliary";

const input = (props) => (
  <Aux>
    <input
      type="text"
      placeholder="insert your wish..."
      onChange={props.changed}
    ></input>
    <button onClick={props.clicked}>submit</button>
  </Aux>
);

export default input;
