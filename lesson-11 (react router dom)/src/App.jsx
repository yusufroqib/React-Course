import  { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import Missing from './Missing'
import About from './About'
import HomeLayout from './HomeLayout'

const App = () => {

  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Rocco',
      date: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet corrupti facere dignissimos laborum! Numquam autem inventore vel architecto nam iure id placeat? Iste, maxime nisi.'
    },
    {
      id: 2,
      title: 'Kanas',
      date: 'September 21, 2026 12:19:36 AM',
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet c.'
    },
    {
      id: 3,
      title: 'Muhammed',
      date: 'July 01, 2024 11:55:36 AM',
      body: ' consectetur adipisicing elit. Amet corrupti facere dignissimos laborum! Numquam autem inventore vel architecto nam iure id placeat? Iste, '
    },
    {
      id: 4,
      title: 'Supreme',
      date: 'August 03, 2025 13:42:36 AM',
      body: ' dignissimos laborum! Numquam autem inventore vel architecto nam consectetur adipisicing elit. Amet corrupti facere  iure id placeat? Iste, '
    }
  ])
  const [searchResult, setSearchResult] = useState([])

  return (
  
      <Routes >
        <Route path='/' element={<HomeLayout search={search} setSearch={setSearch} />}>
            <Route index element={<Home posts={ posts } />} />
            <Route path='/post' element={<NewPost />} >
                <Route path=':id' element={<PostPage />} /> 
            </Route>
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
  )
}

export default App