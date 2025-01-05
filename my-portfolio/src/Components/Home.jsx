
import { useEffect, useState } from 'react';
  
    function Home() {
    const [displayText, setDisplayText] = useState('');
    const master = 'Welcome to my portfolio! Feel free to browse around and learn more about me.';

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