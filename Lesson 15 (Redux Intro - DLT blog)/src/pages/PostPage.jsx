import { useStoreActions, useStoreState } from "easy-peasy"
import { Link, useNavigate, useParams } from "react-router-dom"

const PostPage = () => {
  const navigate = useNavigate()
  const {id} = useParams()

  const deletePost = useStoreActions((action) => action.deletePost)
  const getPostById = useStoreState((state) => state.getPostById)
  const post = getPostById(id)

  const handleDelete = async (id) => {
      deletePost(id)
      navigate("/");
  };
    
  return (
    <main className="PostPage">
      <article className="post">
        {post && <>
        <h2 className="postTitle">{post.title}</h2>
        <p className="postDate">{post.date}</p>
        <p className="postBody">{post.body}</p>
        <Link to={`/edit/${post.id}`}>
          <button className="editButton">Edit Post</button>
        </Link>
        <button className="deleteButton" onClick={ () => handleDelete(post.id)}>Delete</button>
        </>

        }

      </article>
    </main>
  )
}

export default PostPage