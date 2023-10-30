import React from 'react'
import ItemList from './ItemList'


const Content = ({items, handleCheck, handleDelete}) => {       //Another method using object destructuring
    
    return (
        <>
            {items.length? (

            <ItemList 
                items={ items } 
                handleCheck={ handleCheck } 
                handleDelete={ handleDelete } 
            />
            ) : (
                <p style={{marginTop: "2rem", fontWeight: 'bold', fontSize: '2rem'}}>Your list is Empty</p>
            )}
        </>
    
    )
}

export default Content