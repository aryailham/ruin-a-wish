import React, { useState } from "react";
import classes from "./NewPost.module.css";
import Input from "../../components/UI/Input/Input";

import axios from "../../axios-connect";
import { useHistory } from "react-router-dom";

const NewPost = (props) => {
  const [input, setInput] = useState("");

  const inputChangeHandler = (event) => {
    let currData = input;
    currData = event.target.value;
    setInput(currData);
    // console.log(input);
  };

  const onSubmitClickedHandler = () => {
    if (input.length) {
      const data = {
        post: input,
      };
      axios
        .post("/posts.json", data)
        .then((result) => {
          props.history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className={classes.NewPost}>
      <h1 className={classes.title}>New Post</h1>
      <Input
        clicked={onSubmitClickedHandler}
        changed={(event) => inputChangeHandler(event)}
      />
    </div>
  );
};

export default NewPost;
