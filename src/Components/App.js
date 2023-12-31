import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const generateNumber = () => {
    const NumberArea = document.querySelector(".NumberArea");
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNum(randomNumber);

    // Add the 'shadowed' class to trigger the transition
    NumberArea.classList.add("shadowed");

    // Remove the 'shadowed' class after the transition completes
    setTimeout(() => {
      NumberArea.classList.remove("shadowed");
    }, 1000);
  };

  return (
    <div id="wrapper" className="App">
      <div className="NumberArea">
        <p>{num}</p>
      </div>
      <div className="ButtonHolder">
        <button className="GenerateButton" onClick={generateNumber}>
          Generate
        </button>
      </div>
      <div className="BottomFrame">
        <p>Click the button above to generate a random number</p>
      </div>
    </div>
  );
}

export default App;
