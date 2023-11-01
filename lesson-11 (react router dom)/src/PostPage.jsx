import { Link, useParams } from "react-router-dom"

const PostPage = () => {
  const { id } = useParams()
  return (
    <div>PostPage</div>
  )
}

export default PostPage