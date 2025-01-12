import '../CSS/Home.css';

// import { useState } from 'react';

function Home({ d, m, y }) {
  const date = new Date();
  let day = date.getDate() - d < 0 ? date.getDate() - d + 30 : date.getDate() - d;
  let month = date.getMonth() + 1 - m < 0 ? date.getMonth() + 1 - m + 12 : date.getMonth() + 1 - m;
  let year = date.getMonth() + 1 - m < 0 ? date.getFullYear() - y - 1 : date.getFullYear() - y;

  return (
    <div className='Kru'>
      <h1>Hey there , I’m Aji!!</h1>
      <h1> A software developer building apps and and websites for over  {year} years {month} months and {day} days now!!!</h1>
    </div>
  );
}

export default Home;
