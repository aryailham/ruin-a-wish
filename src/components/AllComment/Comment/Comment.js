import React from  'react';
import classes from './Comment.module.css';

const comment = props =>{
    return(
        <div className={classes.CommentPlaceholder}>
            <p>{props.data}</p>
        </div>
    )
}

export default comment;