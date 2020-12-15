import React from 'react'
import './App.css';
import Navbar from "./component/navbar/navbar";
import Routing from "./config/routing";
import Footer from "./component/footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routing/>
      <Footer/>
    </div>
  );
}

export default App;
