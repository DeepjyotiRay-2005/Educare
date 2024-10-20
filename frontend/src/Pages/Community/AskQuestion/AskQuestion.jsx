import React ,{useState} from 'react';
import PostForm from '../../../components/post/PostForm';
import PostList from '../../../components/post/PostList';

import './AskQuestion.css'

function AskQuestion() {
  const [posts, setPosts] = useState([]);

  const addNewPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="app">
      <div className='ask-q-container'>
        <h1>Student Doubt Posting Platform</h1>
        <PostForm addNewPost={addNewPost} />
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default AskQuestion;