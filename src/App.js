import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar  aboutText = "About TU"/>
      <div className="container">
            <TextForm heading = "Enter the text to analyse"/>
      </div>
           {/* 1) remove extra spaces 2) copy the text 3) about us page  */}
    </>
  );
}

export default App;
