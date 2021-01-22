import React from 'react';

import Comment from './Comment/Comment';
import classes from './AllComment.module.css';

const allComment = props =>{

    var comments;

    if(props.comments.length == 0){
        comments = "No Comments"
    }
    else{
        comments = props.comments.map(comment => {
            return <Comment data={comment.comment} key={comment.id}/>
        })
    }

    return(
        <div className={classes.AllComment}>
            {comments}
        </div>
    );
}

export default allComment;