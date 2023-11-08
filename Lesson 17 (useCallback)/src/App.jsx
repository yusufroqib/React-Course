import { useState, useEffect } from 'react'

const App = () => {
  const [userInput, setUserInput] = useState("")
  const [num1] = useState(4)
  const [num2] = useState(5)

  const sum = () => num1 + num2

  useEffect(() => {
    console.log(`New sum. Value: ${sum()}`);
  }, [sum])
  

  return (
    <main className='App'>
      <input type="text" 
        placeholder='Input' 
        value={userInput} 
        onChange={(e) => setUserInput(e.target.value)} 
      />
      <h1>Output: <span style={{color: "#3584de"}}>{userInput || "..."}</span></h1>
    </main>
  )
}

export default App