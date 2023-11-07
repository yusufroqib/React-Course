import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import DataContext from './context/DataContext'

const Nav = () => {

  const { search, setSearch } = useContext(DataContext)

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