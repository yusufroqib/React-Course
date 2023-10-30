import { useState, useEffect } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import AddItem from './AddItem'
import SearchItem from './SearchItem'


function App() {

  const API_URL = 'http://localhost:3400/items'
  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')

    //**********useEffect syntax**********


    useEffect(() => {
      const fetchItems = async () => {
        try {
          
        } catch (err) {
          console.log();
        }
      }
    }, [])
    


    const addItem = (item) => {
      const id = items.length ? items[items.length-1].id + 1 : 1;
      const myNewItem = {id, checked:false, item}
      const listItems = [...items, myNewItem]
      setItems(listItems)
    }

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id?{...item, checked: !item.checked} : item)
        setItems(listItems)
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
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
        <AddItem 
          newItem={newItem} 
          setNewItem={setNewItem} 
          handleSubmit={handleSubmit} 
        />
        <SearchItem 
          search={search} 
          setSearch={setSearch} 
        />
        <Content  
          items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))} 
          handleCheck={handleCheck} 
          handleDelete={handleDelete}
        />                       {/* Custom Element */}
        <Footer length={items.length}/>                         {/* Custom Element */}
    </div>
  )
}

export default App
