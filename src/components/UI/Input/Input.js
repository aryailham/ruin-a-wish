import React from "react";
import Aux from "../../../hoc/Auxiliary";
import classes from "./Input.module.css";

const input = (props) => (
  <Aux>
    <input
      className={classes.InputField}
      type="text"
      placeholder="insert your wish..."
      onChange={props.changed}
    ></input>
    <button onClick={props.clicked} className={classes.Button}>
      submit
    </button>
  </Aux>
);

export default input;
