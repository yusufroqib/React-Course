import React from 'react'

const SearchItem = () => {
  return (
    <form className='searchForm'>
        <label htmlFor='Search'>Search</label>
        <input 
            type="text" 
            id='text'
            placeholder='Search Items'
            role='searchBox'
        />
    </form>
  )
}

export default SearchItem