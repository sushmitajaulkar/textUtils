// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  
  const toggleMode = ()=>{
     if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor= '#002b80'
     }
     else{
      setMode('light');
      document.body.style.backgroundColor= 'white'
    }
  }

  return (
    <>
      {/* <Navbar title="MYAPP" aboutText="About Text"/> */}
      {/* <Navbar/> */}
      <Navbar title="MYAPP" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextForm heading="Enter The Text To Analyze Below" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
