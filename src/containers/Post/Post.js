import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios-connect";
import classes from "./Post.module.css";
import NewComment from '../../components/NewComment/NewComment';

import DetailPostHolder from '../../components/PostHolder/DetailPostHolder';

const Post = (props) => {

    const [post, setPost] = useState({});

    useEffect(() => {
        const postid = props.match.params.id

        axios.get('posts/'+postid+'.json').then((result) => {
            let fetchedData = result;
            setPost(fetchedData.data);
        }).catch((err) =>{
            console.log(err);
        })
    },[]);

    const onChangeCommenthandler = event =>{

    }

    const onClickSubmitHandler = () => {
        
    }

    return (
        <div className={classes.Post}>
            <DetailPostHolder data = {post}/>
            <NewComment/>
        </div>
    )
}

export default Post;