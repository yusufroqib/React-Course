import { useState, useEffect } from "react";

const App = () => {
  const [randomInput, setRandomInput] = useState("");

  return (
    <main className="App">
      <label>Random Input:</label>
      <input
        type="text"
        value={randomInput}
        placeholder="Type anything"
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>Result: {randomInput}</p>
    </main>
  );
};

export default App;
