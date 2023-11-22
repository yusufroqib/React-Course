import { useCallback, useRef, useState } from "react";
import usePosts from "./hooks/usePosts";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css'
import Post from "./Post";

const Example1 = () => {
   const [pageNum, setPageNum] = useState(1)
   const {loading, isError, error, results, hasNextPage} = usePosts(pageNum)
   if (isError) return <p className="center">Error: {error.message}</p>
   const lastPostRef = useRef()

   const content = results.map((post, i) => {
      if(results.length === i + 1) {

      }
      return <Post key={post.id} post={post} />
   })

  return (
     <>
        <h1 id="top">
           &infin; Infinite Query &amp; Scroll
           <br />
           &infin; Ex. 1 - React Only
        </h1>

        <p className="center">Loading more posts...</p>

        <p className="center">
           <a href="#top">Back to Top</a>
        </p>
     </>
  );
}

export default Example1