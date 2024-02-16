import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import About from './components/About'; 
//react router dom- quick guide 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



setInterval(() => {
  document.title='light';
}, 2000);
setInterval(() => {
  document.title='Dark';
}, 1500);

function App() {

  const [mode,setMode] = useState('light');

  const toggleMode = ()=>{
    console.log(mode);
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='grey'
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }

  return (
    <>
    <Router>
      <Navbar mode = {mode} toggleMode={toggleMode} aboutText = "About TU"/>
      <div className="container">
      <Switch>
        <Route exact path="/">
          <TextForm mode = {mode}/>
        </Route>
           <Route exact path="/about">
           <About/>
        </Route>
      </Switch>
        </div>
    </Router>   
    </>
  );
}

export default App;
