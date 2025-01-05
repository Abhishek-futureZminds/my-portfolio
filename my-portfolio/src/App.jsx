import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />

    </>
  );
}

export default App;
