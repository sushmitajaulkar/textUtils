import React, { useState } from "react";
// import {createUndoRedo} from 'react-undo-redo'

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  // const [useUndoRedo] = createUndoRedo(reducer);
  // const [undo, redo] = useUndoRedo();
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClrClick = () => {
    // console.log();
    let newText = " ";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied TO Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    // console.log();
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces Removed!", "success");
  };
  // const handleUnClick = () => {
  //   // console.log();
  //   let newText = text.undo();
  //   setText(newText);
  // }

  //  handleReClick = () => {
  //   // console.log();
  //   let newText = text.redo();
  //   setText(newText);

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
    setCount(event.target.value.split(".").length);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#002b80" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#002b80" : "white",
              color: props.mode === "dark" ? "white" : "#002b80",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>

        <button
          className="btn btn-primary mx-2 btn-info"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2 btn-info"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 btn-info"
          onClick={handleClrClick}
        >
          Clear
        </button>
        <button className="btn btn-primary mx-2 btn-info" 
        onClick={handleCopy}>
          Copy
        </button>
        <button
          className="btn btn-primary mx-2 btn-info"
          onClick={handleExtraSpaces}
        >
          Remove Extra Space
        </button>

        {/* <button disabled={!undo.isPossible} onClick={() => undo()}>
        Undo
      </button>

      <button disabled={!redo.isPossible} onClick={() => redo()}>
        Redo
      </button> */}
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#002b80" }}
      >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words</p>
        <p>{text.length} characters </p>
        <p>{count}sentences</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2> Preview </h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}

// }hello i am sush
