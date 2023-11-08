/* eslint-disable no-unused-vars */
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [values, setValues] = useState({first: "", last: ""})

    const add = () => {
        setCount(prev => prev + 1)    
        setCount(prev => prev + 1)    
    }

    const subtract = () => {
        setCount(prev => prev - 1)    
        setCount(prev => prev - 1)    
    }

    const updateArray = (newVal) => {
        setValues({...values, last: "Dave"})
        setValues(prev => ({...prev, first: "Hassan"}))
    }
    // updateArray()
    console.log(values);

  return (
    <section className='Counter'>
        <h1>{count}</h1>
        <div className='calcBtn'>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
        </div>
        <div>
            <button onClick={() => setCount(0)}>Reset</button>  
        </div>

    </section>
  )
}

export default Counter