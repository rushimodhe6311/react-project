//import logo from './logo.svg';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'


function App() {
  const [mode,setMode]=useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
          setMode('dark')
          document.body.style.backgroundColor="gray";
    }else{
       setMode('light')
    document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
      <Navbar title="Shooes Delivery" mode={mode} toggleMode={toggleMode}></Navbar>
      <div className='container my-3'>
      {/* <About/> */}
      <TextForm heading="Enter the text to analyse below" mode={mode}/>
      </div>
    </>
  );
}

export default App;

