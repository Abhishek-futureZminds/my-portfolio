
import { useEffect, useState } from 'react';
import '../CSS/Home.css'
  
    function Home() {
    const [displayText, setDisplayText] = useState(''); //
    const fullText = 'Welcome to my portfolio!';

    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText((prev) => prev + fullText[index]);
        index++;
        if (index === fullText.length) {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }, []);

    return (
      <div>
        <h1>{displayText}</h1>
      </div>
    );
  }

export default Home;