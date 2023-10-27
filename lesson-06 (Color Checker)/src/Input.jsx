import React from 'react'
import colorNames from 'colornames'

const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setDarkText}) => {
  return (
    <form className='inputForm' onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name</label>
        <input 
            autoFocus
            type="text" 
            required
            placeholder='Add color name'
            value={ colorValue }
            onChange={ (e) => {
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value))
            }}
        />


        <button type='button' onClick={() => { setDarkText(!isDarkText)}}>
            Toggle Text Color
        </button>
    </form>
  )
}

export default Input