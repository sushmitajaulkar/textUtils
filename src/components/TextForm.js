// import { render } from "@testing-library/react";
import React, {useState} from "react";


export default function TextForm(props) {
  const [count, setCount]= useState(0);
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClrClick = () => {
    // console.log();
    let newText = '';
    setText(newText);
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
          setText(event.target.value);
          setCount(event.target.value.split('.').length);
  }

  const [text, setText]= useState('');
  
  // render();{
  //     console.log(this.state.length);
  
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value= {text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear</button>

      </div>

      <div className="container my-3">
         <h2>Your text summary</h2>
         <p>{text.split(" ").length} words</p>
         <p>{text.length} characters </p>
         <p>{count}sentences</p>   
         <p>{0.008 * text.split(" ").length} Minutes read</p>
         <h2> Preview </h2>
         <p>{text}</p>
      </div>

    </>
  );
}

// }hello i am sush
