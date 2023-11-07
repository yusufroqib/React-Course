import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const { data, fetchError, isLoading } = useAxiosFetch(
      "http://localhost:3500/posts"
    );
  
    useEffect(() => {
      setPosts(data);
    }, [data]);
  
    useEffect(() => {
      const filterResult = posts.filter(
        (post) =>
          post.body.toLowerCase().includes(search.toLowerCase()) ||
          post.title.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResult(filterResult.reverse());
    }, [posts, search]);  

    return (
        <DataContext.Provider value={{
            search, setSearch,    //header and nav
            posts, fetchError, isLoading, searchResult, setPosts, //Home
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext