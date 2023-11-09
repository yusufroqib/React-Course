import { useState, useEffect } from 'react'


const App = () => {
  const [userInput, setUserInput] = useState("")
  const [randomInput, setRandomInput] = useState("")




  return (
    <main className='App'>
      <label >Fibonaci Sequence:</label>
      <input type="text" 
        placeholder='Position' 
        value={userInput} 
        onChange={(e) => setUserInput(e.target.value)} 
      />
      <p>Number: {fibNumber || "--"}</p>

      <br />
      <br />

      <label >Random Input:</label>
      <input type="text" 
        value={randomInput}
        placeholder='Type anything'
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>Result: {randomInput}</p>

    </main>
  )
}

export default App