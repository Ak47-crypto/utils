import React, { useState } from 'react'
import Navbar from "./Navbar.js";
import Logics from "./Logics.js";
import Alert from './Alert.js';
// import './App.css';

function App() {
  const [mode, setMode] = useState('light')
  const [local,setLocal]=useState('light')
  const [local_d,setLocal_d]=useState('dark')
  const [alert,setAlert]=useState(null)
  let showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(()=>{
      setAlert(null)},3000)
  }
  let set = () => {
    // let elem;
    if (mode === 'dark'){
      setMode("light")
      // elem=document.getElementsByTagName('body')
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert("light mode activated","success")
      localStorage.setItem("1",local)
      localStorage.removeItem("2")
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor="black"
      document.body.style.color="white"
      showAlert("Dark mode activated","success")
      localStorage.setItem("2",local_d)
      localStorage.removeItem("1")
    }
  }

  function rev(){
    let temp=mode;
    if(temp==='light')
      temp='dark';
    else
      temp='light'
    return temp;
  }

  return (
    <>
      <Navbar title="Utils" mode={mode} set={set} rev={rev}  />
      
      <Alert title={alert} />
      <Logics mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
