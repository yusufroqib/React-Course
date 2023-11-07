import React from 'react'

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section 
        className='square' 
        style={{ 
            backgroundColor: hexValue || colorValue,
            color: isDarkText ? "#000" : "#FFF" 
        }}
        >

        <p>{ colorValue ? colorValue : "Empty Value" }</p>
        <p>{ hexValue ? hexValue : null }</p>

    </section>
  )
}

Square.defaultProps = {
    colorValue: "Empty color value",
}

export default Square