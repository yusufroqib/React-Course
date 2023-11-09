import { useState, useRef } from "react";

const App = () => {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0)
  const renders = useRef()

  return (
    <main className="App">
      <input
        type="text"
        value={randomInput}
        placeholder="Type anything"
        
      />
      <p>Renders: {randomInput}</p>

      <br />
      <br />

      <section>
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
