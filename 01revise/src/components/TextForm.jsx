import React from "react";

function TextForm(props) {
  const [text, setText] = React.useState("Hello My name is shivam");
  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (e) => {
    console.log("onChange was clicked");
    setText(e.target.value);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-3xl mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="w-full p-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows={8}
        ></textarea>
      </div>
      <button
        className="text-sm text-white bg-blue-500 p-2 rounded-xl"
        onClick={handleUpClick}
      >
        Convert to Uppercase
      </button>
      <button
        className="text-sm text-white bg-blue-500 p-2 rounded-xl mx-4"
        onClick={handleLowClick}
      >
        Convert to LowerCase
      </button>
      <div className="container my-3">
        <h2 className="font-semibold">Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p><br></br>
        <p>{0.08 * text.split(" ").length}  Minutes to Read</p>
      </div>
      <div className="container my-3">
        <h3 className="font-semibold">Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TextForm;
