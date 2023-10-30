import React from 'react'
import ItemList from './ItemList'


const Content = ({items, handleCheck, handleDelete}) => {       //Another method using object destructuring
    
    return (
        <main>
            {items.length? (

            <ItemList 
                items={ items } 
                handleCheck={ handleCheck } 
                handleDelete={ handleDelete } 
            />
            ) : (
                <p style={{marginTop: "2rem", fontWeight: 'bold', fontSize: '2rem'}}>Your list is Empty</p>
            )}
        </main>
    
    )
}

export default Content