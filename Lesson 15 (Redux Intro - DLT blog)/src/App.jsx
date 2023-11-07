import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import PostPage from "./pages/PostPage";
import Missing from "./pages/Missing";
import About from "./pages/About";
import HomeLayout from "./layout/HomeLayout";
import EditPost from "./pages/EditPost";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useEffect } from "react";
import { useStoreActions } from "easy-peasy";


const App = () => {
  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );
  
  const setPosts = useStoreActions((action) => action.setPosts)

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={ <Home fetchError={fetchError} isLoading={isLoading}/> } />
          <Route path="/post">
            <Route index  element={<NewPost />} />
            <Route path=":id" element={<PostPage />}/>
          </Route>
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
  );
};

export default App;
