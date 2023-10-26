import { useState } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import AddItem from './AddItem'
// import ListComponent from './ListComponent'


function App() {
  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState([

    {
        id: 1,
        checked: false,
        item: 'ReactJs'
    },
    {
        id: 2,
        checked: false,
        item: 'Javascript'
    },
    {
        id: 3,
        checked: false,
        item: 'NodeJs'
    },

    ])

    const addItem = (item) => {
      const id = items.length ? items[items.length-1].id + 1 : 1;
      const myNewItem = {id, checked:false, item}
      const listItems = [...items, myNewItem]
      setItems(listItems)
      localStorage.setItem('Shoppinglist', JSON.stringify(listItems))
    }

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id?{...item, checked: !item.checked} : item)
        setItems(listItems)
        localStorage.setItem('Shoppinglist', JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem('Shoppinglist', JSON.stringify(listItems))
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!newItem) return;
      addItem(newItem)
      setNewItem('')
    }

  return (
    <div className='App'>
        <Header title="Cohort 3 List"/>                        {/* Custom Element */}
        <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
        <Content  items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>                       {/* Custom Element */}
        <Footer length={items.length}/>                         {/* Custom Element */}
    </div>
  )
}

export default App
