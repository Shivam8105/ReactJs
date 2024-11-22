import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen transition-colors duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 px-2 flex justify-center">
        <div className="flex gap-3 shadow-lg bg-white px-4 py-3 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2 rounded-full text-white font-medium shadow-sm"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-2 rounded-full text-white font-medium shadow-sm"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-2 rounded-full text-white font-medium shadow-sm"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-2 rounded-full text-white font-medium shadow-sm"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-2 rounded-full text-white font-medium shadow-sm"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-2 rounded-full text-black font-medium shadow-sm"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("Pink")}
            className="outline-none px-4 py-2 rounded-full text-white font-medium shadow-sm"
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("Purple")}
            className="outline-none px-4 py-2 rounded-full text-white font-medium shadow-sm"
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("Lavender")}
            className="outline-none px-4 py-2 rounded-full text-black font-medium shadow-sm"
            style={{ backgroundColor: "Lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("White")}
            className="outline-none px-4 py-2 rounded-full text-black font-medium shadow-sm"
            style={{ backgroundColor: "White" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("Black")}
            className="outline-none px-4 py-2 rounded-full text-white font-medium shadow-sm"
            style={{ backgroundColor: "Black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
