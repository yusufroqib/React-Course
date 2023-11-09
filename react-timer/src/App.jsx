import { useState, useRef } from "react";

const App = () => {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0)
  
  const renders = useRef(0)
  const inputRef = useRef()
  const timerId = useRef()

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++
      setSeconds(prev => prev + 1)
    }, 1000)
  }

  const handleInputChange = (e) => {
    setRandomInput(e.target.value)
    renders.current++
  }

  // const focusOnInput = () => {
  //   inputRef.current.focus()
  // }

  return (
    <main className="App">
      <input
        ref={inputRef}
        type="text"
        value={randomInput}
        placeholder="Type anything"
        onChange={handleInputChange}
      />
      <p>Renders: {renders.current}</p>

      <br />
      <br />

      <section>
        {/* <button onClick={focusOnInput}>Focus</button> */}
        <button>Stop</button>
        <button>Start</button>
      </section>

      <button>Reset</button>

      <br />
      <br />

      <p>Seconds: </p>

      <br />
      <br />

      <p>{randomInput}</p>

    </main>
  );
};

export default App;
