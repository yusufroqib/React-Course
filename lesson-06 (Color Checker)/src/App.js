import { useState } from "react";
import Input from "./Input";
import Square from "./Square";


function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setDarkText] = useState('');

  return (
    <div className="App">

      <Square 
        colorValue={ colorValue } 
        hexValue={ hexValue }
        isDarkText={ isDarkText }
      />

      <Input 
        colorValue={ colorValue } 
        setColorValue={ setColorValue } 
        setHexValue={ setHexValue }
        isDarkText={ isDarkText }
        setDarkText={ setDarkText }
      />

    </div>
  );
}

export default App;
