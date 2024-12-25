import React, { useState } from "react";
import "../styles/App.css";  // Import the CSS file for styling

function App() {
  // Step 1: Set up state to manage the visibility of the paragraph
  const [isVisible, setIsVisible] = useState(false);

  // Step 2: Define the toggle function for button click
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App" id="main">
      <button id="click" onClick={toggleVisibility}>
        Click Me
      </button>
      
      {/* Step 3: Conditionally render the paragraph */}
      <p 
        id="para" 
        className={isVisible ? "show" : "hide"}  // Apply the appropriate class based on visibility
      >
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
      </p>
    </div>
  );
}

export default App;
