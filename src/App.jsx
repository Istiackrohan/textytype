import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Spline from '@splinetool/react-spline';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <Spline
        className="mouse-pointer"
        scene="https://prod.spline.design/T5m33x8p-BJmrsI2/scene.splinecode"
      />
    </>
  );
}

export default App;
