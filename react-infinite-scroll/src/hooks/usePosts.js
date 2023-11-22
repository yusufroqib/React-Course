import { useState, useEffect } from "react";
import { getPostsPage } from "../api/axios";

const usePosts = (pageNum) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})
    const [isError, setIsError] = useState(false)
    const [hasNextPage, setHasNextPage] = useState(false)

    useEffect(() => {
       setLoading(true);
       setIsError(false);
       setError({});

       const controller = new AbortController();
       const { signal } = controller.signal;
       getPostsPage(pageNum, { signal })
          .then((data) => {
             setResults((prev) => [...prev, ...data]);
             setHasNextPage(Boolean(data.length));
             setLoading(false);
          })
          .catch((e) => {
             setLoading(false);
             if(signal.aborted) return 
             setIsError(true)
             setError({message: e.message})
          });

          return () => controller.abort();
    }, [pageNum]);

  return {loading, isError, error, results, hasNextPage}
}

export default usePosts