import React, { useState } from "react";
import classes from "./NewPost.module.css";
import Input from "../../components/UI/Input/Input";

const NewPost = () => {
  const [input, setInput] = useState("");

  const inputChangeHandler = (event) => {
    let currData = input;
    currData = event.target.value;
    setInput(currData);
  };

  const onSubmitClickedHandler = () => {};

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
