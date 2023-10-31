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
      <Header />
      <Nav />
      <Home />
      <NewPost />
      <PostPage />
      <Missing />
      <About />
      <Footer />
    </div>
  )
}

export default App