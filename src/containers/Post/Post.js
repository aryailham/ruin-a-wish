import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios-connect";
import classes from "./Post.module.css";
import NewComment from '../../components/NewComment/NewComment';
import AllComment from '../../components/AllComment/AllComment';

import DetailPostHolder from '../../components/PostHolder/DetailPostHolder';

const Post = (props) => {

    const [post, setPost] = useState({});
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const postid = props.match.params.id

        axios.get('posts/'+postid+'.json').then((result) => {
            let fetchedData = result;
            setPost(fetchedData.data);
        }).catch((err) =>{
            console.log(err);
        })

        axios.get('comments.json').then((result) => {
            let fetchedData = [];
            for(let key in result.data){
                fetchedData.push({...result.data[key], id: key});
            }
            setComments(fetchedData);
        }).catch((err) =>{
            console.log(err);
        })
    },[]);

    const onChangeCommenthandler = event =>{
        let data = event.target.value;
        setNewComment(data);
    }

    const onClickSubmitHandler = () => {
        if(newComment.length){
            const data = {
                postid: props.match.params.id,
                comment: newComment,
            };
            axios
              .post("/comments.json", data)
              .then((result) => {
                setNewComment("");
                props.history.push("/post/"+props.match.params.id);
              })
              .catch((err) => {
                console.log(err);
              });
        }
    }

    return (
        <div className={classes.Post}>
            <DetailPostHolder data = {post}/>
            <AllComment comments = {comments}/>
            <NewComment changed = {(event) => onChangeCommenthandler(event)} clicked={onClickSubmitHandler} newcomment={newComment}/>
        </div>
    )
}

export default Post;