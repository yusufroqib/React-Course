import { useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState('')
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(false)


  return (
    <main className="App" style={{color: color ? '#fff' : '#fff92'}}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <br />
      <br />

      <p>{count}</p>

      <section>
        <button onClick={focusOnInput}>Focus</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={startTimer}>Start</button>
      </section>

      <button onClick={resetTimer}>Reset</button>

      <br />
      <br />

      <p>Seconds: {seconds}</p>

      <br />
      <br />

      <p>{randomInput}</p>

    </main>
  );
};

export default App;
