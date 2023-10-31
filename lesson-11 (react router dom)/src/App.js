import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './Header'

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