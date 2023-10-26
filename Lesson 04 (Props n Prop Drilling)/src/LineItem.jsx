import React from 'react'
import { BsTrash3 } from 'react-icons/bs'


const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className='item' key={item.id}>
    <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)}/>

    <label style={(item.checked) ? {textDecoration: "line-through"} : null} onDoubleClick={() => handleCheck(item.id)}>
        {item.item}
    </label>
    <BsTrash3 role='button' tabIndex='0' onClick={() => handleDelete(item.id)}/>
</li>
  )
}

export default LineItem
