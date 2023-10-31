import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import Missing from './Missing'
import About from './About'
import Footer from './Footer'

const App = () => {

  const [search, setSearch] = useState('')
  const [post, setPost] = useState([
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
    <div className='App'>
      <Header title= 'DLT Student Blog' />
      <Nav />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<NewPost />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />   
    </div>
  )
}

export default App