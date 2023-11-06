import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext';



const EditPost = () => {
  const {posts, handleEdit, editBody, editTitle, setEditBody, setEditTitle} = useContext(DataContext)
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id)

    useEffect(() => {
        if(post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditTitle, setEditBody])
  return (
    <main className="NewPost">
        {editTitle && 
            <>
            
    <h2>Edit Post</h2>
    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="postTittle"> Edit Title </label>
      <input
        type="text"
        required
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <label htmlFor="postBody"> Edit Body </label>
      <textarea
        id="postBody"
        required
        value={editBody}
        onChange={(e) => setEditBody(e.target.value)}
      ></textarea>
      <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
    </form>
            </>
        }

        {!editTitle && 
            <>
                <h2>Post Not Found</h2>
                <p>Well, that's disappointing</p>
                <p>
                    <Link to='/'>Visit our website</Link>
                </p>
            </>
        }
  </main>
  )
}

export default EditPost