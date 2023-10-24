import React from 'react'

const Content = () => {

    const handleNameChange = () => {
        const names = ["Ali", "Dave", "Brisa"]
        const int = Math.floor(Math.random() * 3)
            return names[int]
    }
    
    const handleClick = () => {

    }

  return (
    <main>
      Hello {handleNameChange()}
    </main>
  )
}

export default Content
