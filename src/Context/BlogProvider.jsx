import React, { useState } from 'react';
import { BlogContext } from './BlogContext';

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [openBlogModal, setOpenBlogModal] = useState(false);
  const [closeBlogModal, setCloseBlogModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const addPost = (post) => {
    setPosts(prev => [...prev, post]);
  };

  const removePost = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  const selectPost = (id) => {
    const post = posts.find(p => p.id === id);
    setSelectedPost(post);
  };

  return (
    <BlogContext.Provider 
      value={{ 
        posts, 
        addPost, 
        removePost, 
        selectedPost, 
        setSelectedPost,
        selectPost, 
        openBlogModal, 
        closeBlogModal,
        setOpenBlogModal,
        setCloseBlogModal
      }}>
      {children}
    </BlogContext.Provider>
  );
}
