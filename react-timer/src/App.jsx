import { useState, useEffect } from "react";

const App = () => {
  const [randomInput, setRandomInput] = useState("");

  return (
    <main className="App">
      <input
        type="text"
        value={randomInput}
        placeholder="Type anything"
        onChange={(e) => setRandomInput(e.target.value)}
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

    </main>
  );
};

export default App;
