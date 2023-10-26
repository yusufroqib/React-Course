import React from 'react'

const AddItem = () => {
  return (
    <form className='addForm'>
      <label htmlFor="addItem">Add Item</label>
      <input id='addItem' type='text' placeholder='add Item' required />
      <button type='submit' aria-label='Add Item'></button>
    </form>
  )
}

export default AddItem
