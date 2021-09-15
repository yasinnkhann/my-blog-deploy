import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

export default function CreatePost() {

    const [userName, setUserName] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const submitPost = () => {
        axios.post(`https://mysql-first-deploy.herokuapp.com/api/create`, {
            userName: userName,
            title: title,
            text: text,
        })
        .then(() => {
            window.location = '/';
        })
        .catch(err => {
            console.error(err); 
        })
    };

    return (
        <div className="createPost">
            <div className="uploadPost">
                <label>Username</label>
                <input 
                type="text" 
                onChange={(e) => setUserName(e.target.value)}
                />
                <label>Title</label>
                <input 
                type="text" 
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Post Text</label>
                <textarea 
                onChange={(e) => setText(e.target.value)}
                />
                <button
                onClick={() => submitPost()}
                >
                    Submit Post
                </button>
            </div>
        </div>
    );
}
