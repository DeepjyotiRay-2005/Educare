import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.length === 0 ? (
        <p>No posts yet</p>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostList;
