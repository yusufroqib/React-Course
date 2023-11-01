import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from "date-fns";

import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import About from "./About";
import HomeLayout from "./HomeLayout";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Rocco",
      date: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet corrupti facere dignissimos laborum! Numquam autem inventore vel architecto nam iure id placeat? Iste, maxime nisi.",
    },
    {
      id: 2,
      title: "Kanas",
      date: "September 21, 2026 12:19:36 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet c.",
    },
    {
      id: 3,
      title: "Muhammed",
      date: "July 01, 2024 11:55:36 AM",
      body: " consectetur adipisicing elit. Amet corrupti facere dignissimos laborum! Numquam autem inventore vel architecto nam iure id placeat? Iste, ",
    },
    {
      id: 4,
      title: "Supreme",
      date: "August 03, 2025 13:42:36 AM",
      body: " dignissimos laborum! Numquam autem inventore vel architecto nam consectetur adipisicing elit. Amet corrupti facere  iure id placeat? Iste, ",
    },
  ]);
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    
  }, [posts, search])
  

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const date = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, date, body: postBody}
    const allPost = [...posts, newPost]
    setPosts(allPost)
    setPostTitle('')
    setPostBody('')
    navigate("/")
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<HomeLayout search={search} setSearch={setSearch} />}
      >
        <Route index element={<Home posts={posts} />} />
        <Route path="/post">
          <Route
            index
            element={
              <NewPost
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path=":id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
