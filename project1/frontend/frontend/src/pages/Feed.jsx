import React, { useState } from 'react'
import { useActionState } from 'react'
const Feed = () => {
const [posts , setpost] = useState([
  {
    _id : "1",
    caption: "test_caption",
    image: "https://ik.imagekit.io/gwffhfxyd/image_ZAgvVmc4z.jpg",
  
  }
])

 return (
  <section>
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

}
export default Feed
