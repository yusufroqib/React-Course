import { useState } from "react";

const App = () => {
  const [useInput, setUseInput] = useState('')
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(false)


  return (
    <main className="App" style={{color: color ? '#fff' : '#fff92'}}>
      <input
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
