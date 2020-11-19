import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios-connect";
import classes from "./Post.module.css";

import DetailPostHolder from '../../components/PostHolder/DetailPostHolder';

const Post = (props) => {

    const [post, setPost] = useState({});

    useEffect(() => {
        const postid = props.match.params.id

        axios.get('posts.json').then((result) => {
            console.log(result);
            let fetchedData = [];
            for(let key in result.data){
                fetchedData.push({ ...result.data[key], id: key });
            }
            const data = fetchedData.filter((data) =>{
                return data.id == postid;
            } );
            setPost(...data);
        }).catch((err) =>{
            console.log(err);
        })
    },[]);

    return (
        <div className={classes.Post}>
            <DetailPostHolder data = {post}/>
        </div>
    )
}

export default Post;