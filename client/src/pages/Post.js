import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Post() {

    const [post, setPost] = useState({});

    let { postId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/api/getFromId/${postId}`)
        .then(res => {
            setPost({
                title: res.data[0].title,
                postText: res.data[0].post_text,
                userName: res.data[0].user_name,
            });
            console.log(res.data);
        })
        .catch(err => {
            console.error(err); 
        })
    }, [])

    return (
        <div className="individualPost">
            <div className="post individual">
                <h1>{post.title}</h1>
                <p>{post.postText}</p>
                <h4>{post.userName}</h4>
            </div>
        </div>
    );
}
