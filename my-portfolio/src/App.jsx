import Navbar from './Components/Navbar';
import Home from './Components/Home';
import './App.css'
import Footer from './Components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Footer />
      <Home d={5} m={8} y={2021} /> 
      
    </>
  );
}

export default App;
