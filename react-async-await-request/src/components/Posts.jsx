import { useEffect } from "react";
import axios from "../apis/jsonPH";
import useAxiosFunction from "../hooks/useAxiosFunction";

const Posts = () => {
   const [posts, loading, error, axiosFetch] = useAxiosFunction();
   const getData = () => {
      axiosFetch({
         axiosInstance: axios,
         url: "/posts",
         method: "GET",
      });
   };

   useEffect(() => {
      getData();
   }, []);

   const handleSubmit = () => {
      axiosFetch({
         axiosInstance: axios,
         url: "/posts",
         method: "POST",
         requestConfig: {
            data: {
               userId: 10,
               title: "Supreme",
               body: "Holla at your boy...",
            },
         },
      });
   };

   return (
      <article>
         <h2>Posts</h2>
         <div className="row">
            <button onClick={() => handleSubmit()}>Submit</button>
         </div>

         {loading && <p>Loading...</p>}
         {!loading && error && <p className="errMsg">{error}</p>}
         {!loading && !error && posts?.length && (
            <ul>
                {
                    posts.map((post, i) => (
                        <li key={i}>{post.id}. {post.title}</li>
                    ))
                }
            </ul>
         )}
         {!loading && !error && posts?.length && posts?.data}
         {!loading && !error && !posts?.length && <p>No Post to Display! 😞</p>}

      </article>
   );
};

export default Posts;
