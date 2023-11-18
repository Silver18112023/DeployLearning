import React from 'react';
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
// Component chính của trang Home
const Home = () => {
const [count, setCount] = useState(0);
const CountNumber = ()=> {
    setCount((count) => count + 1);
};
  return (
    <div>
      <h1>Welcome to the Silver Group!</h1>
      <p>This is a simple React component for the home page.</p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
            <button onClick={CountNumber}>
            count is {count}
            </button>
            <p>
            Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
    </div>
  );
};

export default Home;