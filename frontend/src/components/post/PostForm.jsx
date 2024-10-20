import React, { useState } from 'react';

const PostForm = ({ addNewPost }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    const newPost = {
      id: Date.now(),
      text: text,
      image: image ? URL.createObjectURL(image) : null,
      comments: []
    };

    addNewPost(newPost);
    setText('');
    setImage(null);
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="Ask a question or post a doubt..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
