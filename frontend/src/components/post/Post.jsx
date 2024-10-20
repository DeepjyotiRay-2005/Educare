import React, { useState } from 'react';
import Comment from './Comment';

const Post = ({ post }) => {
  const [comments, setComments] = useState(post.comments);
  const [commentText, setCommentText] = useState('');

  const addComment = (e) => {
    e.preventDefault();
    if (!commentText) return;

    const newComment = {
      id: Date.now(),
      text: commentText,
    };

    setComments([newComment, ...comments]);
    setCommentText('');
  };

  return (
    <div className="post">
      <p>{post.text}</p>
      {post.image && <img src={post.image} alt="Post" />}
      
      <div className="comments">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>

      <form onSubmit={addComment} className="comment-form">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default Post;
