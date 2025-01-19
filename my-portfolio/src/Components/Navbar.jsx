import '../CSS/Navbar.css';
import infinityLogo from '../assets/infinity.svg';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><img src={infinityLogo} alt="Logo" /></li>  
        <li><input type='text' placeholder='Search' /></li>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;