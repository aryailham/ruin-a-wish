import classes from './NewComment.module.css';
import React from 'react';

const newComment = props => {
    return(
        <div className={classes.NewComment}>
            <input type="text" placeholder="Input your comment" className={classes.CommentBox}></input>
            <button className={classes.Button}>Submit</button>
        </div>
    )
}

export default newComment;