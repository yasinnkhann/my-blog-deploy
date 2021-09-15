import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function MainPage() {

    const [postList, setPostList] = useState([]);

    let history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:3001/api/get`)
        .then(res => {
            setPostList(res.data);
            console.log(res.data);
        })
        .catch(err => {
            console.error(err); 
        })
    }, [])

    const likePost = (e, id) => {
        e.stopPropagation()
        axios.post(`http://localhost:3001/api/like/${id}`)
        .then(() => {
            window.location = '/';
        })
        .catch(err => {
            console.error(err); 
        })
    };

    return (
        <div className="mainPage">
            <div className="postContainer">

                {postList.map((val) => (
                    <div 
                    className="post" 
                    key={val.id}
                    onClick={() => history.push(`/post/${val.id}`)}
                    >
                        <h1>{val.title}</h1>
                        <p>
                            {val.post_text.length > 500 ? val.post_text.substring(0, 500) + ' ...' : val.post_text}
                        </p>
                        <button 
                        onClick={(e) => likePost(e, val.id)}>
                            Like
                        </button>
                        <div className="bottom">
                            <h4>{val.user_name}</h4>
                            <h4>{val.likes}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
