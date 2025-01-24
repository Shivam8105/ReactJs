import { useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarComponent title="SHIVAM" home="About" />
      <TextForm heading="Enter the text to analyze" />
      <About />
    </>
  );
}

export default App;
