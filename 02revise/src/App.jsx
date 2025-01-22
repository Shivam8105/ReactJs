import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Shivam");
  const [image, setImage] = useState("https://wallpapers.oneindia.com/ph-1024x768/2015/05/shivam-wallpaper_143167036630.jpg");
  const [color,setColor] = useState("#e3fc03");
  const handleOnClick = () => {}
  return (
    <div className="flex w-full h-screen bg-gray-100 items-center justify-center">
      <div className="flex flex-row w-2/3 h-2/3 bg-white rounded-lg shadow-md p-6">
        {/* Left Panel */}
        <div className="flex flex-col w-1/3 space-y-4">
          <label
            htmlFor="name"
            id="name"
            className="block text-lg font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name_2"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <label
            htmlFor="image"
            id="image"
            className="block text-lg font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="url"
            id="url"
            className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <label
            htmlFor="color"
            id="color"
            className="block text-lg font-medium text-gray-700"
          >
            Color
          </label>
          <input
            type="color"
            id="color_2"
            className="w-16 h-10 border border-gray-300 rounded-lg cursor-pointer focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <button
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
            onClick={handleOnClick}
          >
            Submit
          </button>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col w-2/3 items-center justify-center space-y-4">
          <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <img
              src="#"
              alt="Preview"
              className="max-w-full max-h-full object-cover rounded-lg"
              onChange={() => setImage(image)}
            />
          </div>

          <button className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-400">
            Reset
          </button>

          <h4 className="text-lg font-semibold text-gray-700">Name</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
