import React, { useState } from 'react'
import { BsTrash3 } from 'react-icons/bs'


const Content = ({items, handleCheck, handleDelete}) => {       //Another method using object destructuring
    
    return (
        <main>
            {items.length? (

            <ul>
                {items.map((item) => (
                    <li className='item' key={item.id}>
                        <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)}/>

                        <label style={(item.checked) ? {textDecoration: "line-through"} : null} onDoubleClick={() => handleCheck(item.id)}>
                            {item.item}
                        </label>
                        <BsTrash3 role='button' tabIndex='0' onClick={() => handleDelete(item.id)}/>
                    </li>
                ))}
            </ul>
            ) : (
                <p style={{marginTop: "2rem", fontWeight: 'bold', fontSize: '2rem'}}>Your list is Empty</p>
            )}
        </main>
    
    )
}

export default Content
