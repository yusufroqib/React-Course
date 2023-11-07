import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { useStoreActions, useStoreState } from "easy-peasy";

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);
  const setEditTitle = useStoreActions((action) => action.setEditTitle);
  const setEditBody = useStoreActions((action) => action.setEditBody);
  const editPost = useStoreActions((action) => action.editPost)
  const getPostById = useStoreState((state) => state.getPostById)
  const post = getPostById(id)

  const handleEdit = async (id) => {
    const date = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, date, body: editBody };
    editPost(updatedPost)
    navigate("/")
  };

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="NewPost">
      {editTitle && (
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
            <button type="submit" onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}

      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing</p>
          <p>
            <Link to="/">Visit our website</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
