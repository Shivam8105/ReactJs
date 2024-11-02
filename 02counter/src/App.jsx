import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Shivam and Friends</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button>Decrease value {counter}</button>
      <p>footer: {counter}</p>
    </div>
  );
}

export default App;
