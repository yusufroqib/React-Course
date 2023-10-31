import React from 'react'
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