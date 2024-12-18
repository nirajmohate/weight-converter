import { useState } from "react";
import "./App.css";

function App() {
  const [kg, setKg] = useState(""); // stores kg value (input value)
  const [g, setG] = useState(""); // stores gram value (calculated result)

  const check = () => {
    // Parse the kg value as a number
    const kgValue = parseFloat(kg);

    // If the input is not a valid number, display an error message
    if (isNaN(kgValue) || kg.trim() === "") {
      setG("Please enter a valid number.");
      return;
    }

    // Perform the conversion: 1 kg = 1000 grams
    const grams = kgValue * 1000;

    // Update the grams state with the converted value
    setG(grams);
  };

  return (
    <>
      <h1>Converter</h1>
      <div>
        <label>Enter weight in kg:</label>
        <input
          type="text"
          value={kg}
          onChange={(e) => setKg(e.target.value)}
          placeholder="Enter kg"
        />
      </div>
      <div>
        <label>Weight in grams:</label>
        <input
          type="text"
          value={g}
          readOnly
          placeholder="Grams (result)"
        />
      </div>
      <button onClick={check}>Submit</button>

      {/* Display the result if it exists */}
      {g && <p>{g} grams</p>}
    </>
  );
}

export default App;
