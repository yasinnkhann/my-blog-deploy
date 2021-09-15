import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {
  return (
    <Fragment>
    <div className="navbar">
      <div className="links">
        <a href="/">Main Page</a>
        <a href="/createpost">Create Post</a>
      </div>
    </div>

    <Router>
      <Route path="/" exact render={(props) => <MainPage />} />
      <Route path="/createpost" exact render={(props) => <CreatePost />} />
      <Route path="/post/:postId" exact render={(props) => <Post />} />
    </Router>
    </Fragment>
  );
}

export default App;
