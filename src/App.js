import "./App.css";
import Navbar from "./Components/Navbar";
// import About from "./Components/About";
import TextForms from "./Components/TextForms";
import React ,{useState} from 'react';

function App() {
  const toggleMode = () => {
    if(Mode === 'light'){
      //setMode is a function so cant use = 
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  const [Mode, setMode] = useState('light');
  return (
    //<> and </> is jsx fragment used when we want to return more and in react only one div is returned everything inside it.
    //react sanitizes external html only internal allowed
    <>
     <Navbar title="Home" aboutText="Word Counter" list="Our Offerings"  mode={Mode} toggleMode ={toggleMode}/>  


      <div className="container my-3">
        <TextForms heading ="Enter the text to analyze!"  mode={Mode} />
      </div>

      {/* <About/> */}
    </>
  );
}

export default App;
