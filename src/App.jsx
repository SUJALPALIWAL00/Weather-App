import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';

function App() {
  
  

  return (
    <>
    <div className="bg-[url('/bg.jpg')] md:pl-10 bg-cover  h-[100vh] w-[100vw]" >
    <Navbar/>
    <Header/>
    </div>
    </>
  )
}

export default App
