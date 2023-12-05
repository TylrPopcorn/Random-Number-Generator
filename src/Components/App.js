import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNum(randomNumber);
  };

  return (
    <div className="App">
      <div className="NumberArea">
        <p>{num}</p>
      </div>
      <div className="ButtonHolder">
        <button className="GenerateButton" onClick={generateNumber}>
          Generate
        </button>
      </div>
      <p>Click the button above to generate a random number</p>
    </div>
  );
}

export default App;
