import React, { useState } from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  const [note, setNote] = useState([]);
  const [content, setContent] = useState("");

  function handleInput(e) {
    const { value } = e.target;
    setContent(value);
  }

  function handleClick() {
    setNote((prev) => {
      return [...prev, <li>{content}</li>];
    });
    setContent("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={content} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{note}</ul>
      </div>
    </div>
  );
}

export default App;
