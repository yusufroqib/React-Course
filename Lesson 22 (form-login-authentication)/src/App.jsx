import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import LinkPage from "./components/LinkPage";
import Unauthorized from "./components/Unauthorized";
import Home from "./components/Home";
import Editor from "./components/Editor";
import Admin from "./components/Admin";
import Lounge from "./components/Lounge";
import Missing from "./components/Missing";

const ROLES = {
  'User' : 2001,
  'Editor' : 1984,
  'Admin' : 5158
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public Routes */}

        <Route index element={<Login />} />
        <Route path="/linkpage" element={<LinkPage />} />
        <Route path="/Unauthorized" element={<Unauthorized />} />

        {/* private Routes */}
        <Route path="/" element={<Home />} />
        <Route path="editor" element={<Editor />} />
        <Route path="admin" element={<Admin />} />
        <Route path="lounge" element={<Lounge />} />

        {/* to catch all error */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;