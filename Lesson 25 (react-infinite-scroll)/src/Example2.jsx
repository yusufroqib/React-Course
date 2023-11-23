import { useCallback, useRef } from "react";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css'
import Post from "./Post";
import { useInfiniteQuery } from "react-query";
import { getPostsPage } from "./api/axios";

const Example2 = () => {
    const {fetchNextPage, hasNextPage, isFetchingNextPage, data, status, error} = useInfiniteQuery('/posts', 
        ({pageParam = 1}) => getPostsPage(pageParam), 
        {getNextPageParam: (lastPage, allPages) => {
            return lastPage.length ? allPages.length + 1 : undefined
        }}
    )
   
    const intObserver = useRef()
   
    const lastPostRef = useCallback((post) => {
      if (isFetchingNextPage) return;
 
      if (intObserver.current) intObserver.current.disconnect();

      const confirmLoad = () => {
         confirmAlert({
            title: "Confirm Load More",
            message: "Are you sure you want to load more posts?",
            buttons: [
               {
                  label: "Yes",
                  onClick: () => {
                     fetchNextPage();
                  }
               },
               {label: "No"}
            ]
         })
      }

     intObserver.current = new IntersectionObserver((post) => {
        if (post[0].isIntersecting && hasNextPage) {
           console.log("we are near the last post");
            confirmLoad()
        }
     });
      if (post) intObserver.current.observe(post)
   }, [isFetchingNextPage, fetchNextPage, hasNextPage]);

   if (status === 'error') return <p className="center">Error: {error.message}</p>;

   const content = data?.pages.map(pg => {
      return pg.map((post, i) => {
         if (pg.length === i + 1) {
            return <Post ref={lastPostRef} key={post.id} post={post} />;
         }
         return <Post key={post.id} post={post} />;
      });
   });
   

   

   return (
      <>
         <h1 id="top">
            &infin; Infinite Query &amp; Scroll
            <br />
            &infin; Ex. 2 - React Query
         </h1>

         {content}

         <p className="center">Loading more posts...</p>

         <p className="center">
            <a href="#top">Back to Top</a>
         </p>
      </>
   );
}

export default Example2