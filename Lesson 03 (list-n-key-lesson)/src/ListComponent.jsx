import React from 'react'

const ListComponent = () => {
    const items = [
        {id: 1, name: "Item 1", age: 30},
        {id: 2, name: "Item 2", age: 25},
        {id: 3, name: "Item 3", age: 28},
        {id: 3, name: "Item 4", age: 36}
    ]

  return (
    <main>
      <ul>
        {items.map(item => (
        <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default ListComponent
