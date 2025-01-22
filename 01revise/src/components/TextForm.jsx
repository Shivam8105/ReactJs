import React from "react";

function TextForm(props) {
  const [text, setText] = React.useState("Hello My name is shivam");
  const handleOnClick = () => {
    console.log("Uppercase was clicked");
    setText("You have clicked on Uppercase");
  };
  const handleOnChange = (e) => {
    console.log("onChange was clicked");
    setText(e.target.value);
  };
  return (
    <div className="container mx-auto p-4">
      <h1>{props.heading}</h1>
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
        onClick={handleOnClick}
      >
        Convert to Uppercase
      </button>
    </div>
  );
}

export default TextForm;
