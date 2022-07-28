import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React,{useState} from 'react';
import Alert from './component/Alert';

function App() {

  const [mode, setmode] = useState('light');//wher dark mode is enable
  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
  }
  const tooglemode=()=>{
    if(mode ==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#051f45";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color='black';

    }
  }
  return (
    <>
    <Navbar title='Magic Work' mode={mode} tooglemode={tooglemode}/>
    <Alert alert={alert}/>
    <TextForm mode={mode}/>
    <About/>
    </>
  
  
  );
}


export default App;
