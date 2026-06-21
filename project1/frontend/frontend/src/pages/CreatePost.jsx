import React from 'react'

const CreatePost = () => {
  return (
    <section className='create-post-section'>
      <h1>Create Post</h1>
        <form>
            <input type="file" placeholder='upload image' name='image' accept='image/*' />
            <input type="text" placeholder='Enter Caption' required name='caption' />
            <button type='submit'>Submit</button>
        </form>
 
    </section>
  )
}

export default CreatePost
