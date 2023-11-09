import React from 'react'

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className='searchForm'>
        <label htmlFor='Search'>Search</label>
        <input 
            type="text" 
            id='text'
            placeholder='Search Items...'
            role='searchBox'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem