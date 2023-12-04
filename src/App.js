import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
  };

  return (
    <div className="ButtonHolder">
      <p>{num}</p>
      <button className="GenerateButton" onClick={generateNumber}>
        Generate
      </button>
      <p>Click the button above to generate a random number</p>
    </div>
  );
}

export default App;
