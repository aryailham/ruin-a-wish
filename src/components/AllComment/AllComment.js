import React from 'react';

import Comment from './Comment/Comment';

const allComment = props =>{

    var comments;

    if(props.comments.length == 0){
        comments = "No Comments"
    }
    else{
        comments = props.comments.map(comment => {
            return <div key={comment.id}>{comment.comment}</div>
        })
    }

    return(
        <div>
            {comments}
        </div>
    );
}

export default allComment;