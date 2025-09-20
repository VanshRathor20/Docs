import React from 'react'
import Background from './Components/Background';
import ForeGround from './Components/ForeGround'
const App = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background></Background>
      <ForeGround></ForeGround>
      
    </div>
  );
}

export default App