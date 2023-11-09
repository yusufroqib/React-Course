import { useState, useEffect, useCallback, useMemo } from 'react'

const getArray = () => {
  for (let i = 0; i < 1000000000; i++){

  }
  return ['Muhammad', "Fine Boy"]
}

const App = () => {
  const [userInput, setUserInput] = useState("")
  const [randomInput, setRandomInput] = useState("")

  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n-2)
  }, [])

  const fibNumber = useMemo(() => fib(userInput), [userInput, fib])

  const myArray = useMemo(() => getArray(), [])

  useEffect(() => {
    console.log("New Array");
  }, [myArray])


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

      <h1>Output: <span style={{color: "#3584de", fontSize: "40px"}}>{userInput || "..."}</span></h1>
    </main>
  )
}

export default App