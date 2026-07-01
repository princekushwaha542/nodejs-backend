import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Feed = () => {
  const [posts, setpost] = useState([
]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then((res) => {
        setpost(res.data.posts)
        console.log(res.data.posts)
      })
  }, []);

  return (
    <section className='feed-section'>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className='post-card'>
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </section>
  );
};

export default Feed;