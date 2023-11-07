import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

const NewPost = () => {
  const navigate = useNavigate();  
  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);
  const savePost = useStoreActions((action) => action.savePost)
  const setPostTitle = useStoreActions((action) => action.setPostTitle)
  const setPostBody = useStoreActions((action) => action.setPostBody)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const date = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, date, body: postBody };
    savePost(newPost)
    navigate("/");
  };

  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTittle"> Post Title </label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody"> Post Body </label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
