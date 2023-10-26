import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
      <p>{length} Lists {length === 1 ? "item": "items"}</p>
    </footer>
  )
}

export default Footer
