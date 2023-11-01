import { NavLink } from 'react-router-dom'

const Nav = ({ search, setSearch }) => {
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