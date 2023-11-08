import { useState, useEffect, useCallback } from 'react'

const App = () => {
  const [userInput, setUserInput] = useState("")
  const [result, setResult] = useState(0)
  const [num1] = useState(4)
  const [num2] = useState(5)

  const sum = useCallback(() => num1 + num2, [num1, num2])

  const buildArray = useCallback(() => [num1, num2], [num1, num2])

  useEffect(() => {
    console.log(`New sum. Value: ${buildArray()}`);
    setResult(buildArray())
  }, [buildArray])
  

  return (
    <main className='App'>
      <input type="text" 
        placeholder='Input' 
        value={userInput} 
        onChange={(e) => setUserInput(e.target.value)} 
      />
      <h1>Output: <span style={{color: "#3584de", fontSize: "40px"}}>{userInput || "..."}</span></h1>
    </main>
  )
}

export default App