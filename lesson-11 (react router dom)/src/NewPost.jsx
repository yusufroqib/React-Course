const NewPost = ({ postTitle, setPostTitle, postBody, setPostBody, handleSubmit }) => {
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
      <label htmlFor="postTitle">Post Title</label>
      <input 
        type="text" 
        required
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <label htmlFor="postBody">Post Body</label>
      <textarea 
        id="postBody" 
        required value={postBody} 
        onChange={(e) => setPostBody(e.target.value)} 
        />
      <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewPost