import React, { useState , useEffect } from 'react'
import axios from axios 
import { useActionState } from 'react'
const Feed = () => {
const [posts , setpost] = useState([
  {
    _id : "1",
    caption: "test_caption",
    image: "https://ik.imagekit.io/gwffhfxyd/image_ZAgvVmc4z.jpg",
  
  }
])
useEffect(()=>{
  axios.get("http://localhost:3000/create-post")
  .then((res)=>{
    console.log(res.data);
  })
})


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

}
export default Feed
