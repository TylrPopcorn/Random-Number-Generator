import React, { useState } from "react";

function App() {
  //-----vars:
  const [num, setNum] = useState(0); //Used to keep track of random number generated.

  //--------------------------------
  //Functions:
  const generateNumber = () => {
    //This function will generate a random number to be shown on screen.
    const NumberArea = document.querySelector(".NumberArea");
    const Numb = document.querySelector(".randomNumber"); //grab number area.

    const randomNumber = Math.floor(Math.random() * 100) + 1; //generate a random number
    setNum(randomNumber);

    if (
      NumberArea.classList.contains("shadowed") ||
      Numb.classList.contains("fade")
    ) {
      //If the function is already running, then end here.
      return;
    }

    //Fade/Shadow effects (ADD):
    Numb.classList.add("fade");
    NumberArea.classList.add("shadowed");

    // Remove the 'fade' class after the transition completes
    setTimeout(() => {
      Numb.classList.remove("fade");
    }, 900);

    // Remove the 'shadowed' class after the transition completes
    setTimeout(() => {
      NumberArea.classList.remove("shadowed");
    }, 1100);
  };

  //----return:
  return (
    <div id="wrapper" className="App">
      <div className="NumberArea">
        <p className="randomNumber">{num}</p>
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

//----------------------[Exports]:
export default App;
