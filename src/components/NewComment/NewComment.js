import classes from './NewComment.module.css';
import React from 'react';

const newComment = props => {
    return(
        <div className={classes.NewComment}>
            <input type="text" placeholder="Input your comment" className={classes.CommentBox} onChange={props.changed} value={props.newcomment}></input>
            <button className={classes.Button} onClick={props.clicked}>Submit</button>
        </div>
    )
}

export default newComment;