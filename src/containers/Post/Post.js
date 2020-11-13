import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios-connect";
import classes from "./Post.module.css";

const Post = (props) => {

    const [post, setPost] = useState({});

    useEffect(() => {
        const postid = props.match.params.id

        axios.get('posts.json/').then((result) => {
            // setPost(result);
            let fetchedData = [];
            for(let key in result.data){
                fetchedData.push({ ...result.data[key], id: key });
            }
            console.log(fetchedData.filter((data) => data.id == postid));
            setPost(...fetchedData);
        }).catch((err) =>{
            console.log(err);
        })
    },[]);

    return <div>{post.post}</div>
}

export default Post;