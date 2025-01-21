import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Shivam",
    age: 20
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded -xl mb-4">Tailwind Test</h1>
     <Card username = "chai or code" btnText="click me"/>
     {/* <Card username = "Shivam" btnText="Visit me"/> */}
    </>
  );
}

export default App;
