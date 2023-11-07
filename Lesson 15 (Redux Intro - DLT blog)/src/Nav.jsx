import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useStoreActions, useStoreState } from "easy-peasy";


const Nav = () => {
  const posts = useStoreState((state) => state.posts)
  const search = useStoreState((state) => state.search)
  const setSearch = useStoreActions((action) => action.setSearch)
  const setSearchResults = useStoreActions((action) => action.setSearchResults)

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search, setSearchResults]);  


  return (
    <nav className='Nav'>

      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">
          Search Post
        </label>

        <input
          type="text"
          id='search' placeholder='Search posts'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/post'>Post</NavLink></li>
      </ul>

    </nav>
  )
}

export default Nav