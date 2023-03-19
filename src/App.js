import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';
import Posts from './Posts';
import Create from './Create';
import PostView from './PostView';

function App()
{
  const [posts, setPosts] = useState([]);

  function addPost(post)
  {
    setPosts([...posts, post]);
  }

  function deletePost(index)
  {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  }

  return (
    <div>
      <Helmet>
        <title>Nate - React Blog App</title>
      </Helmet>
      <Router>
        <div className="container-fluid" style={{
          height: '100vh',
          backgroundImage:
            'linear-gradient(to bottom right, #FBB03B, #F98806, #DC2F02, #9D0208)',
        }}>
          <Navbar />
          <div className="content d-flex justify-content-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts posts={posts} deletePost={deletePost} />} />
              <Route path="/create" element={<Create addPost={addPost} />} />
              <Route path="/view/:id" component={PostView} /> {/* add the new route */}
            </Routes>
          </div>
        </div>
      </Router >
    </div>
  );
}

export default App;
